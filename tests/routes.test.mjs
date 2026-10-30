import test from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { readFile } from 'node:fs/promises';

test('home and assessment routes preserve content, accessible structure, and form contract', async () => {
  const server = await createServer({ server: { middlewareMode: true } });
  try {
    const { default: App } = await server.ssrLoadModule('/src/App.jsx');
    for (const pathname of ['/', '/ai-data-center-optimization', '/ai-data-center-optimization/']) {
      global.window = { location: { pathname } };
      const html = renderToStaticMarkup(React.createElement(App));
      assert.equal((html.match(/<h1/g) || []).length, 1);
      assert.match(html, /id="main"/);
      assert.match(html, /aria-label="Main navigation"/);
      assert.match(html, /aria-controls="site-nav"/);
      const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
      assert.equal(new Set(ids).size, ids.length, 'IDs must be unique');
      for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
        assert.ok(ids.includes(target), `Anchor ${target} resolves`);
      }
      if (pathname === '/') {
        for (const title of ['Neocloud Architecture, Deployment &amp; Optimization', 'Cybersecurity Services', 'Infrastructure Optimization', 'AI Infrastructure, Governance &amp; Automation', 'Infrastructure &amp; Edge Platforms', 'Cloud Partnerships &amp; Multi-Cloud Strategy', 'High-Performance Hosting &amp; GPU Infrastructure', 'Business Continuity &amp; Disaster Recovery', 'Development, Testing &amp; Deployment', 'Data Management', 'Compliance &amp; Governance', 'Decommission']) {
          assert.ok(html.includes(title), `Preserved ${title}`);
        }
      } else {
        for (const domain of ['Power &amp; cooling', 'Networking &amp; load balancing', 'virtualization', 'Storage &amp; data protection', 'failover testing', 'critical-system validation', 'Automated documentation', 'Neocloud architecture, deployment &amp; optimization']) {
          assert.ok(html.includes(domain), `Covers ${domain}`);
        }
        assert.match(html, /action="https:\/\/formspree.io\/f\/xjgpbwbz"/);
        assert.match(html, /name="_subject"/);
        assert.match(html, /name="email" type="email" required/);
        assert.match(html, /name="company" required/);
        assert.match(html, /name="goals" required/);
        assert.match(html, /<fieldset>/);
      }
    }
    const { rewrites } = JSON.parse(await readFile('vercel.json', 'utf8'));
    assert.ok(rewrites.some(rule => rule.source === '/ai-data-center-optimization' && rule.destination === '/index.html'));
  } finally {
    delete global.window;
    await server.close();
  }
});
