---
layout: default
nav: cv
title: CV
permalink: /cv/
---

<section class="page">

  {% include meta-strip.html crumb='CV' suffix='Curriculum' %}

  {%- comment -%} Detect whether the CV PDF has been uploaded to the configured path. {%- endcomment -%}
  {% assign cv_pdf_path = site.cv_pdf | default: '/assets/pdf/cv.pdf' %}
  {% assign cv_pdf_exists = false %}
  {% for f in site.static_files %}
    {% if f.path == cv_pdf_path %}{% assign cv_pdf_exists = true %}{% endif %}
  {% endfor %}

  <!-- ========== HERO ========== -->
  <div class="page-hero">
    <div class="col-text">
      <div class="pill-row">
        <span class="chip dark">Curriculum Vitae</span>
        <span class="chip">{{ site.author.exp }}</span>
        {% if cv_pdf_exists %}<span class="chip acc">PDF available</span>{% endif %}
      </div>
      <p class="eyebrow">// 04 — Credentials</p>
      <h1>{{ site.author.name }}</h1>
      <p class="lede">
        Five years across web, mobile, embedded, and adversary-simulation work.
        Two CVEs, four academic publications, 100+ Hall of Fame credits.
      </p>

      <div class="actions" style="margin-top: 22px; display: flex; gap: 12px; flex-wrap: wrap;">
        {% if cv_pdf_exists %}
          <a href="{{ cv_pdf_path | relative_url }}"
             class="btn-primary"
             download="{{ site.cv_pdf_filename | default: 'cv.pdf' }}">
            Download PDF →
          </a>
        {% endif %}
        <a href="{{ '/contact/' | relative_url }}" class="btn-ghost">Get in touch</a>
      </div>
    </div>

    <aside>
      <dl class="kv">
        <dt>// Email</dt>    <dd><a href="mailto:{{ site.author.email }}" style="color:inherit">{{ site.author.email }}</a></dd>
        <dt>// LinkedIn</dt> <dd><a href="https://linkedin.com/in/ashfaqul-haq" rel="noopener" style="color:inherit">{{ site.author.handle }}</a></dd>
        <dt>// Location</dt> <dd>{{ site.author.location }}</dd>
        <dt>// Role</dt>     <dd>{{ site.author.role }}</dd>
        <dt>// Available</dt><dd>For engagements</dd>
      </dl>
    </aside>
  </div>

  <!-- ========== OBJECTIVE ========== -->
  <header class="sec-mark">
    <p class="num">01 / Objective</p>
    <div>
      <h2>Red Team specialist, end to end.</h2>
    </div>
  </header>

  <div class="prose" style="max-width:none;">
    <p>A results-driven Red Team specialist with experience identifying vulnerabilities
    across software, hardware, and network infrastructure. Comprehensive penetration
    testing of digital platforms (Web, Android) and physical / embedded systems —
    including IoT devices, access-control hardware, biometric data, and telco assets.
    Skilled in realistic APT simulations and bypassing modern defenses through
    sophisticated EDR and Antivirus evasion.</p>
  </div>

  <!-- ========== EXPERIENCE ========== -->
  <header class="sec-mark">
    <p class="num">02 / Experience</p>
    <div>
      <h2>Three roles, five years.</h2>
    </div>
  </header>

  <div class="exp-strip">
    <div class="exp-row">
      <div class="when">June 2025 — Present</div>
      <h3 class="what">Off. Sec. Engineer · Shorborno</h3>
      <p class="where">MSSP of Grameenphone Ltd. · GP House, Dhaka.</p>
    </div>
    <div class="exp-row">
      <div class="when">June 2022 — May 2025</div>
      <h3 class="what">Cyber Security Analyst</h3>
      <p class="where">Pentester Space · Agargaon, Dhaka.</p>
    </div>
    <div class="exp-row">
      <div class="when">2021 — 2024</div>
      <h3 class="what">Security Researcher</h3>
      <p class="where">Synack Red Team Inc. · Redwood City, California (Remote).</p>
    </div>
  </div>

  <div class="prose" style="max-width:none; margin-top: 28px;">
    <h3>Shorborno — Off. Sec. Engineer</h3>
    <ul>
      <li><strong>200+ web and Android pentests</strong> on enterprise clients and bug-bounty programs.</li>
      <li>Critical web vulnerabilities — <strong>SQLi, SSRF, SSTI, XSS</strong>, broken auth and authorization.</li>
      <li>Embedded-systems assessments — <strong>IoT devices, access-control hardware, biometric data</strong>.</li>
      <li>Multi-stage Red Team engagements with <strong>APT simulations</strong>.</li>
      <li>Custom payloads — <strong>EDR evasion</strong> and <strong>DLP bypass</strong>.</li>
      <li>Technical reports with reproducible PoCs and strategic remediation.</li>
    </ul>

    <h3>Pentester Space — Cyber Security Analyst</h3>
    <ul>
      <li>SOC monitoring with <strong>SolarWinds, Suricata, Wazuh, Splunk</strong>.</li>
      <li>SOAR-driven incident response across web, Android, network, and Active Directory.</li>
      <li>Compliance support — <strong>GDPR, ISO/IEC 27001, MITRE ATT&amp;CK, NIST</strong>.</li>
      <li>IAM controls and AWS security best practices for new projects and vendors.</li>
    </ul>

    <h3>Synack Red Team — Security Researcher</h3>
    <ul>
      <li>Vulnerability research on web and Android applications.</li>
      <li>Critical-to-low findings reported across the program lifecycle.</li>
    </ul>
  </div>

  <!-- ========== TOOLS + LANGUAGES + COMPLIANCE ========== -->
  <header class="sec-mark">
    <p class="num">03 / Toolkit</p>
    <div>
      <h2>Tools, languages, frameworks.</h2>
    </div>
  </header>

  <ul class="compact-list">
    <li><span class="k">Web</span>      <span class="v">Burp Suite Pro · Acunetix · OWASP ZAP · Nuclei · SQLMap</span></li>
    <li><span class="k">Network</span>  <span class="v">Nmap · Wireshark · Nessus Pro · Tenable.io</span></li>
    <li><span class="k">C2</span>       <span class="v">Cobalt Strike · Sliver · Loki · Metasploit Pro</span></li>
    <li><span class="k">AD</span>       <span class="v">BloodHound · CrackMapExec · Impacket · NetExec</span></li>
    <li><span class="k">Mobile</span>   <span class="v">APKTool · MobSF · Jadx-GUI · Frida · Objection</span></li>
    <li><span class="k">RE</span>       <span class="v">Ghidra · x32dbg · PE-Bear</span></li>
    <li><span class="k">Crypto</span>   <span class="v">Hashcat · John the Ripper</span></li>
    <li><span class="k">Code</span>     <span class="v">Python · Bash · C (elementary) · Snyk.io</span></li>
    <li><span class="k">Compliance</span> <span class="v">NIST SP 800-115 · ISO/IEC 27001:2022 · MITRE ATT&amp;CK</span></li>
  </ul>

  <!-- ========== CERTIFICATIONS ========== -->
  <header class="sec-mark">
    <p class="num">04 / Certifications</p>
    <div>
      <h2>Eight programs.</h2>
      <p class="blurb">Offensive operations, web, mobile, infra, and cloud.</p>
    </div>
  </header>

  <ul class="compact-list">
    <li><span class="k">CRTO</span>    <span class="v">Certified Red Team Operator <span class="sub">Zero-Point Security</span></span></li>
    <li><span class="k">eWPTX</span>   <span class="v">Web Pentester eXtreme v2.0 <span class="sub">INE / eLearnSecurity</span></span></li>
    <li><span class="k">CRTA</span>    <span class="v">Certified Team Analyst <span class="sub">CWL</span></span></li>
    <li><span class="k">CRT-ID</span>  <span class="v">Red Team Infra Dev <span class="sub">CWL</span></span></li>
    <li><span class="k">MCRTA</span>   <span class="v">Multi-Cloud Red Team Analyst <span class="sub">CWL</span></span></li>
    <li><span class="k">PAPI</span>    <span class="v">Practical API Hacking <span class="sub">TCM Security</span></span></li>
    <li><span class="k">MAPT</span>    <span class="v">Mobile App Pentesting <span class="sub">TCM Security</span></span></li>
    <li><span class="k">DFIR</span>    <span class="v">Autopsy Basics <span class="sub">Hands-on Training</span></span></li>
  </ul>

  <!-- ========== EDUCATION + AWARDS ========== -->
  <header class="sec-mark">
    <p class="num">05 / Education &amp; awards</p>
    <div>
      <h2>Two degrees, five podium finishes.</h2>
    </div>
  </header>

  <div class="exp-strip">
    <div class="exp-row">
      <div class="when">2025 — Running</div>
      <h3 class="what">M.Sc. Information Systems Security</h3>
      <p class="where">Bangladesh University of Professionals (BUP) — Mirpur Cantonment, Dhaka.</p>
    </div>
    <div class="exp-row">
      <div class="when">2018 — 2022</div>
      <h3 class="what">B.Sc. Electrical &amp; Electronic Engineering</h3>
      <p class="where">International Islamic University Chittagong — Kumira. CGPA 3.09 / 4.0.</p>
    </div>
    <div class="exp-row">
      <div class="when">11 Jan 2020</div>
      <h3 class="what">★ Champion · Team SiliconBits</h3>
      <p class="where">National Cyber Drill 2020 — BGD e-GOV CIRT.</p>
    </div>
    <div class="exp-row">
      <div class="when">2021 — 2022</div>
      <h3 class="what">4× Runners-up</h3>
      <p class="where">IIUC T3 (Inter-Univ. Cyber Drill) · SiliconBits (CTF Super League, IEEE CS BUET) · Bitsoverflow (National Cyber Drill 2021) · Secure Hex (IIUC CyberCon 2022).</p>
    </div>
  </div>

  <!-- ========== HALL OF FAME ========== -->
  <header class="sec-mark">
    <p class="num">06 / Hall of Fame</p>
    <div>
      <h2>100+ acknowledged.</h2>
      <p class="blurb">A partial list — full counter still climbing.</p>
    </div>
  </header>

  <ul class="chip-cloud">
    <li><span class="chip">Nokia</span></li>
    <li><span class="chip">ServiceNow</span></li>
    <li><span class="chip">Sony</span></li>
    <li><span class="chip">Lenovo</span></li>
    <li><span class="chip">Harvard University</span></li>
    <li><span class="chip">Avast</span></li>
    <li><span class="chip">CCleaner</span></li>
    <li><span class="chip">Jira PM</span></li>
    <li><span class="chip">Factorial</span></li>
    <li><span class="chip">Abbie</span></li>
    <li><span class="chip">Envato</span></li>
    <li><span class="chip">Gorgias</span></li>
    <li><span class="chip">Takeways</span></li>
    <li><span class="chip dark">+100 more</span></li>
  </ul>

  <!-- ========== CVEs ========== -->
  <header class="sec-mark">
    <p class="num">07 / CVEs</p>
    <div>
      <h2>Two published.</h2>
      <p class="blurb">Both stored XSS — disclosed responsibly through public CVE channels.</p>
    </div>
  </header>

  <div class="work-grid">
    <a href="/projects/cve-2024-44851-perfex-crm/" class="work-tile">
      <div class="head"><span class="watermark">CVE</span><span class="chip dark">2024</span></div>
      <h3>CVE-2024-44851</h3>
      <p class="blurb">Stored XSS in the File Sharing module of <strong>Perfex CRM</strong>.</p>
      <div class="foot"><span class="lab">Case study</span><span class="arr"><svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span></div>
    </a>
    <a href="/projects/cve-2024-46638-helpdeskz/" class="work-tile">
      <div class="head"><span class="watermark">CVE</span><span class="chip dark">2024</span></div>
      <h3>CVE-2024-46638</h3>
      <p class="blurb">Stored XSS in <strong>HelpDeskZ v2.0.2</strong>.</p>
      <div class="foot"><span class="lab">Case study</span><span class="arr"><svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></span></div>
    </a>
  </div>

  <!-- ========== PUBLICATIONS ========== -->
  <header class="sec-mark">
    <p class="num">08 / Publications</p>
    <div>
      <h2>Four academic publications.</h2>
    </div>
  </header>

  <div class="exp-strip">
    <div class="exp-row">
      <div class="when">[J.1] WINET</div>
      <h3 class="what">Faking Smart Industry — Honeypot Research</h3>
      <p class="where">Co-author. <em>Wireless Networks (WINET).</em></p>
    </div>
    <div class="exp-row">
      <div class="when">[C.1] EAI WICON 2021</div>
      <h3 class="what">★ Same paper · Best Paper Award</h3>
      <p class="where"><em>14th EAI International Wireless Internet (EAI WICON 2021).</em></p>
    </div>
    <div class="exp-row">
      <div class="when">[C.2] ICISET 2022</div>
      <h3 class="what">IoT Air Quality &amp; Weather Monitoring</h3>
      <p class="where">First-author. <em>International Conference on Innovations in Science, Engineering, and Technology (ICISET-2022).</em></p>
    </div>
    <div class="exp-row">
      <div class="when">[C.3] ICSCA 2025</div>
      <h3 class="what">Risk-Based MITRE TTP Scoring</h3>
      <p class="where">Co-author. <em>2025 14th International Conference on Software and Computer Applications.</em> pp. 72–76.</p>
    </div>
    <div class="exp-row">
      <div class="when">[C.4] —</div>
      <h3 class="what">Securing Agentic AI</h3>
      <p class="where">Co-author. Threats, risks, and mitigation.</p>
    </div>
  </div>

  <!-- ========== CTA ========== -->
  <div class="big-cta">
    <div>
      <p class="lab">// Engagement</p>
      <h2>Available for security work.</h2>
    </div>
    <a href="{{ '/contact/' | relative_url }}" class="btn-primary">Get in touch →</a>
  </div>

</section>
