---
layout: default
nav: about
title: About
permalink: /about/
---

<section class="page">

  {% include meta-strip.html crumb='About' suffix='Dossier' %}

  <!-- ========== HERO ========== -->
  <div class="page-hero">
    <div class="col-text">
      <div class="pill-row">
        <span class="chip dark">Red Team Specialist</span>
        <span class="chip">Dhaka · BD</span>
      </div>
      <p class="eyebrow">// 01 — Dossier</p>
      <h1>Operator <span class="italic-serif">profile</span></h1>
      <p class="lede">
        Red Team specialist identifying vulnerabilities across software, hardware,
        and network infrastructure — penetration testing of digital platforms and
        physical / embedded systems, with realistic <em>APT simulations</em>
        and EDR / AV evasion.
      </p>
    </div>

    <aside class="poster">
      <div class="poster-inner">
        <div class="head">
          <span class="chip dark">Off. Sec. Engineer</span>
          <span class="mark">{{ site.author.initials }}</span>
        </div>
        <div class="ini">{% include avatar.html %}</div>
        <div class="name-block">
          <div class="alias">{{ site.author.handle }}</div>
          <h2>{{ site.author.name }}</h2>
          <p class="role">Web · Mobile · Embedded · Cloud</p>
        </div>
        <div class="roles">
          <div class="r"><div class="k">Red</div>     <div class="v">CRTO</div></div>
          <div class="r"><div class="k">Web</div>     <div class="v">eWPTX</div></div>
          <div class="r"><div class="k">Cloud</div>   <div class="v">MCRTA</div></div>
        </div>
      </div>
    </aside>
  </div>

  <!-- ========== STATS ========== -->
  <div class="stat-grid">
    <div class="stat"><div class="n">5+</div>  <div class="l">Years professional</div></div>
    <div class="stat"><div class="n">200+</div><div class="l">Web · Android pentests</div></div>
    <div class="stat"><div class="n">2</div>   <div class="l">CVEs published</div></div>
    <div class="stat"><div class="n">100+</div><div class="l">Hall of Fame credits</div></div>
  </div>

  <!-- ========== EXPERIENCE ========== -->
  <header class="sec-mark">
    <p class="num">02 / Trajectory</p>
    <div>
      <h2>Three roles, five years.</h2>
      <p class="blurb">Offensive engineering, SOC operations, and bug-bounty research — full bullets in the CV.</p>
    </div>
  </header>

  <div class="exp-strip">
    <div class="exp-row">
      <div class="when">June 2025 — Present</div>
      <h3 class="what">Off. Sec. Engineer</h3>
      <p class="where">Shorborno Holdings Ltd. — MSSP of Grameenphone Ltd. · GP House, Dhaka.</p>
    </div>
    <div class="exp-row">
      <div class="when">June 2022 — May 2025</div>
      <h3 class="what">Cyber Security Analyst</h3>
      <p class="where">Pentester Space — Agargaon, Dhaka. SOC monitoring, SOAR-driven response, AD &amp; cloud pentesting.</p>
    </div>
    <div class="exp-row">
      <div class="when">2021 — 2024</div>
      <h3 class="what">Security Researcher</h3>
      <p class="where">Synack Red Team Inc. — Redwood City, CA (Remote). Web and Android vulnerability research.</p>
    </div>
  </div>

  <!-- ========== HOW I WORK ========== -->
  <header class="sec-mark">
    <p class="num">03 / How I work</p>
    <div>
      <h2>Engagement <span class="italic-serif">principles</span>.</h2>
      <p class="blurb">Four things every engagement gets, regardless of scope or budget.</p>
    </div>
  </header>

  <div class="work-grid">
    <div class="work-tile" style="cursor:default;">
      <div class="head"><span class="watermark">01</span><span class="chip dark">Scope</span></div>
      <h3>Narrow first, deep second</h3>
      <p class="blurb">A tight scope explored thoroughly beats five surface skims. Surface-level findings serve no one — and they're what gets missed in the report you actually act on.</p>
    </div>
    <div class="work-tile" style="cursor:default;">
      <div class="head"><span class="watermark">02</span><span class="chip dark">Repro</span></div>
      <h3>PoCs over claims</h3>
      <p class="blurb">Every finding ships with a reproducible proof — script, screenshot, packet capture, request collection. If the engineer can't trigger it, the fix won't land.</p>
    </div>
    <div class="work-tile" style="cursor:default;">
      <div class="head"><span class="watermark">03</span><span class="chip dark">Report</span></div>
      <h3>Two audiences, one document</h3>
      <p class="blurb">Executive summary your leadership can hand up the chain, and a technical appendix your on-call engineer can act on at 11pm. Same report, both layers.</p>
    </div>
    <div class="work-tile" style="cursor:default;">
      <div class="head"><span class="watermark">04</span><span class="chip dark">Remediate</span></div>
      <h3>Diff, not directive</h3>
      <p class="blurb">Not "patch the system" — here's the diff, here's the detection rule, here's the regression test. Strategic remediation written for the engineer who'll implement it.</p>
    </div>
  </div>

  <!-- ========== HIGHLIGHTS ========== -->
  <header class="sec-mark">
    <p class="num">04 / Highlights</p>
    <div>
      <h2>Selected <span class="italic-serif">proof of work</span>.</h2>
    </div>
  </header>

  <div class="work-grid">
    <a href="/projects/cve-2024-44851-perfex-crm/" class="work-tile">
      <div class="head"><span class="watermark">01</span><span class="chip dark">CVE</span></div>
      <h3>CVE-2024-44851</h3>
      <p class="blurb">Stored XSS in the File Sharing module of Perfex CRM.</p>
      <div class="foot"><span class="lab">Case study</span><span class="arr"><svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span></div>
    </a>
    <a href="/projects/cve-2024-46638-helpdeskz/" class="work-tile">
      <div class="head"><span class="watermark">02</span><span class="chip dark">CVE</span></div>
      <h3>CVE-2024-46638</h3>
      <p class="blurb">Stored XSS in HelpDeskZ v2.0.2.</p>
      <div class="foot"><span class="lab">Case study</span><span class="arr"><svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span></div>
    </a>
    <a href="/projects/honeypot-smart-industry/" class="work-tile">
      <div class="head"><span class="watermark">03</span><span class="chip dark">Best Paper</span></div>
      <h3>Honeypot Research</h3>
      <p class="blurb">Honeypot-driven mapping of the smart-industry threat landscape. Best Paper · EAI WICON 2021.</p>
      <div class="foot"><span class="lab">Read paper</span><span class="arr"><svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span></div>
    </a>
    <a href="/projects/iot-air-quality-monitoring/" class="work-tile">
      <div class="head"><span class="watermark">04</span><span class="chip dark">First Author</span></div>
      <h3>IoT Air Quality &amp; Weather</h3>
      <p class="blurb">First-author paper at ICISET 2022 — IoT sensor system with an Android client.</p>
      <div class="foot"><span class="lab">Read paper</span><span class="arr"><svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span></div>
    </a>
  </div>

  <!-- ========== LANGUAGES & FOCUS ========== -->
  <header class="sec-mark">
    <p class="num">05 / Off-shift</p>
    <div>
      <h2>Languages &amp; <span class="italic-serif">current focus</span>.</h2>
      <p class="blurb">A short list of where my attention is between engagements.</p>
    </div>
  </header>

  <div class="two-col">
    <div class="contact-card">
      <h3>// Languages</h3>
      <ul class="contact-list">
        <li>
          <span class="k">Native</span>
          <span class="v">Bangla</span>
        </li>
        <li>
          <span class="k">Fluent</span>
          <span class="v">English</span>
        </li>
        <li>
          <span class="k">Conversational</span>
          <span class="v">Hindi</span>
        </li>
      </ul>
    </div>

    <div class="contact-card">
      <h3>// Currently exploring</h3>
      <ul class="chip-cloud" style="margin-top: 4px;">
        <li><span class="chip">Multi-cloud red-team</span></li>
        <li><span class="chip">EDR / AV evasion</span></li>
        <li><span class="chip">Mobile pentest tooling</span></li>
        <li><span class="chip">Agentic AI security</span></li>
        <li><span class="chip">MITRE TTP scoring</span></li>
        <li><span class="chip">Web vulnerability research</span></li>
      </ul>
      <p style="margin: 14px 0 0; font-family: var(--serif); font-size: 13.5px; line-height: 1.55; color: var(--ink-2);">
        These map to recent certifications (CRTO, eWPTX, MCRTA), recent CVE work, and the directions
        of my <a href="{{ '/cv/' | relative_url }}#publications" style="color: var(--acc);">academic publications</a>.
      </p>
    </div>
  </div>

  <!-- ========== CTA ========== -->
  {% assign cv_pdf_path = site.cv_pdf | default: '/assets/pdf/cv.pdf' %}
  {% assign cv_pdf_exists = false %}
  {% for f in site.static_files %}
    {% if f.path == cv_pdf_path %}{% assign cv_pdf_exists = true %}{% endif %}
  {% endfor %}

  <div class="big-cta">
    <div>
      <p class="lab">// Full credentials</p>
      <h2>Read the complete CV.</h2>
    </div>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <a href="{{ '/cv/' | relative_url }}" class="btn-primary">Open CV →</a>
      {% if cv_pdf_exists %}
        <a href="{{ cv_pdf_path | relative_url }}"
           class="btn-ghost"
           download="{{ site.cv_pdf_filename | default: 'cv.pdf' }}">
          Download PDF
        </a>
      {% endif %}
    </div>
  </div>

</section>
