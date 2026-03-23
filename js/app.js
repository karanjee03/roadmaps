/* ===================================================
   Student Learning Roadmaps - Main Application
   jQuery 3.7+ | jQuery UI 1.13+ | Bootstrap 5
   =================================================== */

$(function () {
  /* ─── Category Icons Map ─────────────────────── */
  const categoryIcon = {
    'Web Development':    '🌐',
    'Backend Development':'⚙️',
    'Mobile Development': '📱',
    'Digital Marketing':  '📣',
    'Design':             '🎨',
    'Data Science':       '🤖',
    'Security':           '🔒',
    'E-Commerce':         '🛒',
  };

  /* ─── Populate Sidebar ───────────────────────── */
  function buildSidebar(list) {
    const $ul = $('#skill-list').empty();
    if (list.length === 0) {
      $('#no-results').show();
      return;
    }
    $('#no-results').hide();
    list.forEach(skill => {
      const icon = categoryIcon[skill.category] || '📚';
      const $li = $('<li>', {
        'data-id': skill.id,
        html: `<span class="skill-icon">${icon}</span>
               <span class="skill-name">${skill.name}</span>
               <span class="skill-cat-badge">${skill.category}</span>`
      });
      $ul.append($li);
    });
  }

  buildSidebar(skills);

  /* ─── Live Search ────────────────────────────── */
  let searchTimeout;
  $('#search-input').on('keyup input', function () {
    clearTimeout(searchTimeout);
    const query = $(this).val().trim().toLowerCase();
    searchTimeout = setTimeout(() => {
      const filtered = query
        ? skills.filter(s =>
            s.name.toLowerCase().includes(query) ||
            s.category.toLowerCase().includes(query)
          )
        : skills;
      buildSidebar(filtered);
      // re-mark active
      const activeId = $('#skill-view').data('active-id');
      if (activeId) {
        $(`#skill-list li[data-id="${activeId}"]`).addClass('active');
      }
    }, 180);
  });

  /* ─── Skill Click ────────────────────────────── */
  $('#skill-list').on('click', 'li', function () {
    const id = $(this).data('id');
    const skill = skills.find(s => s.id === id);
    if (!skill) return;
    $('#skill-list li').removeClass('active');
    $(this).addClass('active');
    loadSkill(skill);
  });

  /* ─── Welcome chip clicks ────────────────────── */
  $(document).on('click', '.welcome-chip', function () {
    const id = $(this).data('id');
    const skill = skills.find(s => s.id === id);
    if (!skill) return;
    $(`#skill-list li[data-id="${id}"]`).trigger('click');
  });

  /* ─── Load Skill ─────────────────────────────── */
  function loadSkill(skill) {
    $('#welcome-state').fadeOut(150, function () {
      renderSkillView(skill);
      $('#skill-view').data('active-id', skill.id).fadeIn(250);
      // Init or refresh jQuery UI tabs
      if ($('#skill-tabs').hasClass('ui-tabs')) {
        $('#skill-tabs').tabs('option', 'active', 0);
      } else {
        $('#skill-tabs').tabs({
          show: { effect: 'fadeIn', duration: 200 }
        });
      }
      // Animate freelance bar on demand tab
      setupDemandBarAnimation(skill);
    });
  }

  /* ─── Render Full Skill View ─────────────────── */
  function renderSkillView(skill) {
    const diffLabel = skill.difficulty.charAt(0).toUpperCase() + skill.difficulty.slice(1);
    const totalWeeks = skill.roadmap.reduce((acc, s) => {
      const n = parseInt(s.duration) || 0;
      return acc + n;
    }, 0);

    // Header
    $('#skill-header').html(`
      <div class="skill-header-title">${skill.name}</div>
      <div class="skill-header-meta">
        <span class="badge-difficulty ${skill.difficulty}">${diffLabel}</span>
        <span class="salary-badge">
          <span class="label">Salary</span>${skill.salaryPKR} PKR/mo
        </span>
        <span class="salary-badge">
          <span class="label">Freelance</span>${skill.freelanceRate}
        </span>
        <span class="salary-badge">
          <span class="label">Duration</span>~${totalWeeks} weeks
        </span>
      </div>
    `);

    // Overview Tab
    $('#tab-overview').html(renderOverview(skill));

    // Roadmap Tab
    $('#tab-roadmap').html(renderRoadmapTab(skill));
    drawRoadmapSVG(skill);

    // Demand Tab
    $('#tab-demand').html(renderDemand(skill));

    // Resources Tab
    $('#tab-resources').html(renderResources(skill));

    // Mobile Accordion
    renderMobileAccordion(skill);
  }

  /* ─── Overview Tab HTML ──────────────────────── */
  function renderOverview(skill) {
    return `
      <div class="overview-grid">
        <div class="info-card">
          <div class="info-card-label">💼 Category</div>
          <div class="info-card-value">${skill.category}</div>
        </div>
        <div class="info-card">
          <div class="info-card-label">⏱ Duration</div>
          <div class="info-card-value">
            ${skill.roadmap.reduce((a, s) => a + (parseInt(s.duration) || 0), 0)} weeks
          </div>
        </div>
        <div class="info-card">
          <div class="info-card-label">💰 Monthly Salary (PKR)</div>
          <div class="info-card-value">${skill.salaryPKR}</div>
        </div>
        <div class="info-card">
          <div class="info-card-label">🌍 Freelance Rate</div>
          <div class="info-card-value">${skill.freelanceRate}</div>
        </div>
      </div>
      <div class="overview-section">
        <h5>🤔 What is it?</h5>
        <div class="overview-text">${skill.overview}</div>
      </div>
      <div class="overview-section">
        <h5>🚀 Why Learn It?</h5>
        <div class="overview-text">${skill.whyLearn}</div>
      </div>
      <div class="overview-section">
        <h5>🗺️ Learning Steps at a Glance</h5>
        <div class="d-flex flex-wrap gap-2">
          ${skill.roadmap.map((s, i) => `
            <span class="d-inline-flex align-items-center gap-1 px-3 py-2 rounded-pill"
                  style="background:var(--primary-light);color:var(--primary-dark);font-size:.8rem;font-weight:600;border:1px solid rgba(26,115,232,.2)">
              <span style="background:var(--primary);color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0">${i + 1}</span>
              ${s.title}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }

  /* ─── Roadmap Tab Shell ──────────────────────── */
  function renderRoadmapTab(skill) {
    return `
      <div id="roadmap-container" style="position:relative">
        <svg id="roadmap-svg" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      <div id="rm-tooltip" class="rm-tooltip"></div>
      <div class="rm-legend mt-3">
        <div class="rm-legend-item">
          <div class="rm-legend-dot" style="background:var(--primary)"></div> Step
        </div>
        <div class="rm-legend-item">
          <div class="rm-legend-dot" style="background:var(--secondary)"></div> Final Step
        </div>
        <div class="rm-legend-item">
          <span style="font-size:.9rem">→</span> Progression
        </div>
      </div>
      <p class="text-muted text-center mt-2" style="font-size:.78rem">
        💡 Hover over a step to see details. Click to explore resources.
      </p>
    `;
  }

  /* ─── Draw SVG Roadmap ───────────────────────── */
  function drawRoadmapSVG(skill) {
    const steps = skill.roadmap;
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.getElementById('roadmap-svg');
    if (!svg) return;

    // Dimensions
    const BOX_W = 160, BOX_H = 70, ARROW_H = 46, PAD_X = 40, PAD_TOP = 30;
    const COLS = window.innerWidth < 600 ? 1 : 2;
    const COL_GAP = 60;
    const totalCols = Math.min(COLS, steps.length);
    const svgW = totalCols * BOX_W + (totalCols - 1) * COL_GAP + PAD_X * 2;

    // Calculate rows needed (zigzag layout for 2 cols)
    let rows, svgH;
    if (COLS === 1) {
      rows = steps.length;
      svgH = rows * BOX_H + (rows - 1) * ARROW_H + PAD_TOP * 2;
    } else {
      rows = Math.ceil(steps.length / 2);
      svgH = rows * BOX_H + (rows - 1) * ARROW_H + PAD_TOP * 2 + 20;
    }

    svg.setAttribute('width', svgW);
    svg.setAttribute('height', svgH);
    svg.setAttribute('viewBox', `0 0 ${svgW} ${svgH}`);
    svg.innerHTML = '';

    // Defs: gradients + arrowhead marker
    const defs = document.createElementNS(svgNS, 'defs');

    function makeGrad(id, c1, c2) {
      const g = document.createElementNS(svgNS, 'linearGradient');
      g.setAttribute('id', id);
      g.setAttribute('x1', '0%'); g.setAttribute('y1', '0%');
      g.setAttribute('x2', '100%'); g.setAttribute('y2', '100%');
      const s1 = document.createElementNS(svgNS, 'stop');
      s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', c1);
      const s2 = document.createElementNS(svgNS, 'stop');
      s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', c2);
      g.appendChild(s1); g.appendChild(s2);
      defs.appendChild(g);
    }
    makeGrad('grad-step', '#1a73e8', '#1557b0');
    makeGrad('grad-final', '#34a853', '#1e8e3e');
    makeGrad('grad-mid', '#8e44ad', '#6c3483');

    // Arrowhead
    const marker = document.createElementNS(svgNS, 'marker');
    marker.setAttribute('id', 'arrowhead');
    marker.setAttribute('markerWidth', '10');
    marker.setAttribute('markerHeight', '7');
    marker.setAttribute('refX', '9');
    marker.setAttribute('refY', '3.5');
    marker.setAttribute('orient', 'auto');
    const poly = document.createElementNS(svgNS, 'polygon');
    poly.setAttribute('points', '0 0, 10 3.5, 0 7');
    poly.setAttribute('fill', '#94a3b8');
    marker.appendChild(poly);
    defs.appendChild(marker);

    svg.appendChild(defs);

    // Compute positions
    const positions = [];
    if (COLS === 1) {
      steps.forEach((_, i) => {
        positions.push({
          x: PAD_X,
          y: PAD_TOP + i * (BOX_H + ARROW_H)
        });
      });
    } else {
      // 2-column zigzag
      steps.forEach((_, i) => {
        const row = Math.floor(i / 2);
        const col = i % 2;
        positions.push({
          x: PAD_X + col * (BOX_W + COL_GAP),
          y: PAD_TOP + row * (BOX_H + ARROW_H)
        });
      });
    }

    // Draw arrows first (behind boxes)
    for (let i = 0; i < steps.length - 1; i++) {
      const cur = positions[i];
      const nxt = positions[i + 1];

      if (COLS === 1 || i % 2 === 1 || i === steps.length - 2) {
        // Vertical or cross arrow
        const x1 = cur.x + BOX_W / 2;
        const y1 = cur.y + BOX_H;
        let x2, y2;

        if (COLS === 2 && i % 2 === 0 && i < steps.length - 1) {
          // Horizontal arrow (same row, col 0 → col 1)
          x2 = nxt.x;
          y2 = nxt.y + BOX_H / 2;
          const xm = (cur.x + BOX_W + nxt.x) / 2;

          const path = document.createElementNS(svgNS, 'path');
          path.setAttribute('d',
            `M ${cur.x + BOX_W} ${cur.y + BOX_H / 2} L ${x2} ${y2}`);
          path.setAttribute('stroke', '#94a3b8');
          path.setAttribute('stroke-width', '2');
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke-dasharray', '6,3');
          path.setAttribute('marker-end', 'url(#arrowhead)');
          svg.appendChild(path);
          continue;
        }

        if (COLS === 2 && i % 2 === 1 && i < steps.length - 1) {
          // Arrow going down-left (col 1 → col 0 next row)
          const nxtPos = positions[i + 1];
          const x1c = cur.x + BOX_W / 2;
          const y1c = cur.y + BOX_H;
          const x2c = nxtPos.x + BOX_W / 2;
          const y2c = nxtPos.y;
          const midY = (y1c + y2c) / 2;

          const path = document.createElementNS(svgNS, 'path');
          path.setAttribute('d',
            `M ${x1c} ${y1c} C ${x1c} ${midY + 10}, ${x2c} ${midY - 10}, ${x2c} ${y2c}`);
          path.setAttribute('stroke', '#94a3b8');
          path.setAttribute('stroke-width', '2');
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke-dasharray', '6,3');
          path.setAttribute('marker-end', 'url(#arrowhead)');
          svg.appendChild(path);
          continue;
        }

        // Fallback straight vertical
        const line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x1);
        line.setAttribute('y2', y1 + ARROW_H - 6);
        line.setAttribute('stroke', '#94a3b8');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('stroke-dasharray', '6,3');
        line.setAttribute('marker-end', 'url(#arrowhead)');
        svg.appendChild(line);
      }
    }

    // Draw step boxes
    steps.forEach((step, i) => {
      const pos = positions[i];
      const isFinal = i === steps.length - 1;
      const isMiddle = i > 0 && !isFinal && i % 3 === 2;
      const gradId = isFinal ? 'grad-final' : (isMiddle ? 'grad-mid' : 'grad-step');

      const g = document.createElementNS(svgNS, 'g');
      g.setAttribute('class', 'rm-step');
      g.setAttribute('data-index', i);
      g.setAttribute('transform', `translate(${pos.x}, ${pos.y})`);

      // Shadow rect
      const shadow = document.createElementNS(svgNS, 'rect');
      shadow.setAttribute('x', '3'); shadow.setAttribute('y', '3');
      shadow.setAttribute('width', BOX_W); shadow.setAttribute('height', BOX_H);
      shadow.setAttribute('rx', '10'); shadow.setAttribute('ry', '10');
      shadow.setAttribute('fill', 'rgba(0,0,0,.12)');
      g.appendChild(shadow);

      // Main rect
      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('width', BOX_W); rect.setAttribute('height', BOX_H);
      rect.setAttribute('rx', '10'); rect.setAttribute('ry', '10');
      rect.setAttribute('fill', `url(#${gradId})`);
      g.appendChild(rect);

      // Step number circle
      const circle = document.createElementNS(svgNS, 'circle');
      circle.setAttribute('cx', '22'); circle.setAttribute('cy', '22');
      circle.setAttribute('r', '12');
      circle.setAttribute('fill', 'rgba(255,255,255,.25)');
      g.appendChild(circle);

      const numText = document.createElementNS(svgNS, 'text');
      numText.setAttribute('x', '22'); numText.setAttribute('y', '27');
      numText.setAttribute('text-anchor', 'middle');
      numText.setAttribute('fill', '#fff');
      numText.setAttribute('font-size', '11');
      numText.setAttribute('font-weight', 'bold');
      numText.setAttribute('font-family', 'Segoe UI, sans-serif');
      numText.textContent = i + 1;
      g.appendChild(numText);

      // Icon
      const iconText = document.createElementNS(svgNS, 'text');
      iconText.setAttribute('x', BOX_W - 16);
      iconText.setAttribute('y', '24');
      iconText.setAttribute('text-anchor', 'middle');
      iconText.setAttribute('font-size', '14');
      iconText.textContent = step.icon || '📌';
      g.appendChild(iconText);

      // Title text (wrap if long)
      const words = step.title.split(' ');
      const line1 = words.slice(0, Math.ceil(words.length / 2)).join(' ');
      const line2 = words.slice(Math.ceil(words.length / 2)).join(' ');

      const titleT = document.createElementNS(svgNS, 'text');
      titleT.setAttribute('x', BOX_W / 2);
      titleT.setAttribute('y', line2 ? '42' : '48');
      titleT.setAttribute('text-anchor', 'middle');
      titleT.setAttribute('fill', '#fff');
      titleT.setAttribute('font-size', '11');
      titleT.setAttribute('font-weight', '700');
      titleT.setAttribute('font-family', 'Segoe UI, sans-serif');
      titleT.textContent = line1;
      g.appendChild(titleT);

      if (line2) {
        const titleT2 = document.createElementNS(svgNS, 'text');
        titleT2.setAttribute('x', BOX_W / 2);
        titleT2.setAttribute('y', '55');
        titleT2.setAttribute('text-anchor', 'middle');
        titleT2.setAttribute('fill', 'rgba(255,255,255,.9)');
        titleT2.setAttribute('font-size', '11');
        titleT2.setAttribute('font-weight', '700');
        titleT2.setAttribute('font-family', 'Segoe UI, sans-serif');
        titleT2.textContent = line2;
        g.appendChild(titleT2);
      }

      // Duration label
      const durText = document.createElementNS(svgNS, 'text');
      durText.setAttribute('x', BOX_W / 2);
      durText.setAttribute('y', BOX_H - 8);
      durText.setAttribute('text-anchor', 'middle');
      durText.setAttribute('fill', 'rgba(255,255,255,.75)');
      durText.setAttribute('font-size', '9');
      durText.setAttribute('font-family', 'Segoe UI, sans-serif');
      durText.textContent = step.duration;
      g.appendChild(durText);

      svg.appendChild(g);
    });

    // Tooltip interactions
    const $tooltip = $('#rm-tooltip');
    $(svg).find('.rm-step').on('mouseenter', function (e) {
      const idx = parseInt($(this).data('index'));
      const step = steps[idx];
      $tooltip.html(`
        <strong>${step.icon || ''} ${step.title}</strong><br>
        <span style="color:rgba(255,255,255,.7);font-size:.75rem">${step.duration}</span><br>
        <span>${step.desc}</span>
      `).addClass('show');
    }).on('mousemove', function (e) {
      const container = $('#roadmap-container').offset();
      $tooltip.css({
        left: e.pageX - container.left + 14,
        top: e.pageY - container.top - 20
      });
    }).on('mouseleave', function () {
      $tooltip.removeClass('show');
    }).on('click', function () {
      const idx = parseInt($(this).data('index'));
      const step = steps[idx];
      // Switch to resources tab and highlight
      if (!$('#skill-tabs').is(':hidden')) {
        $('#skill-tabs').tabs('option', 'active', 3);
      }
    });
  }

  /* ─── Demand Tab HTML ────────────────────────── */
  function renderDemand(skill) {
    const d = skill.demand;
    return `
      <div class="demand-grid">
        <div class="demand-stat">
          <div class="demand-stat-value">${d.jobsMonthly}+</div>
          <div class="demand-stat-label">Monthly Jobs</div>
          <div class="growth-badge">📈 ${d.growth}</div>
        </div>
        <div class="demand-stat">
          <div class="demand-stat-value">${d.freelancePercent}%</div>
          <div class="demand-stat-label">Freelance</div>
        </div>
        <div class="demand-stat">
          <div class="demand-stat-value">${skill.salaryPKR}</div>
          <div class="demand-stat-label">PKR / Month</div>
        </div>
        <div class="demand-stat">
          <div class="demand-stat-value">${skill.freelanceRate}</div>
          <div class="demand-stat-label">Freelance Rate</div>
        </div>
      </div>

      <div class="demand-section">
        <h5>📢 Top Platforms in Pakistan</h5>
        <div class="platform-tags">
          ${d.topPlatforms.map(p => `<span class="platform-tag">${p}</span>`).join('')}
        </div>
      </div>

      <div class="demand-section">
        <h5>🤝 Freelance vs Employment Split</h5>
        <div class="freelance-bar-wrap">
          <div class="freelance-label">
            <span>Freelance</span><span id="freelance-pct-label">${d.freelancePercent}%</span>
          </div>
          <div class="freelance-bar">
            <div class="freelance-bar-fill" id="freelance-bar-fill" data-pct="${d.freelancePercent}"></div>
          </div>
          <div class="freelance-label mt-2">
            <span>Employment</span><span>${100 - d.freelancePercent}%</span>
          </div>
          <div class="freelance-bar">
            <div class="freelance-bar-fill"
                 style="background:linear-gradient(90deg,var(--primary),var(--accent));width:${100 - d.freelancePercent}%"></div>
          </div>
        </div>
      </div>

      <div class="demand-section">
        <h5>🏙️ Top Cities Hiring in Pakistan</h5>
        <div class="city-pills">
          ${d.topCities.map(c => `<span class="city-pill">📍 ${c}</span>`).join('')}
        </div>
      </div>
    `;
  }

  /* ─── Setup Demand Bar Animation ─────────────── */
  function setupDemandBarAnimation(skill) {
    $('#skill-tabs').on('tabsactivate.demand', function (e, ui) {
      if (ui.newPanel.attr('id') === 'tab-demand') {
        setTimeout(() => {
          const pct = skill.demand.freelancePercent;
          $('#freelance-bar-fill').css('width', pct + '%');
        }, 100);
        $(this).off('tabsactivate.demand');
      }
    });
  }

  /* ─── Resources Tab HTML ─────────────────────── */
  function renderResources(skill) {
    const free = skill.resources.filter(r => r.type === 'free');
    const paid = skill.resources.filter(r => r.type === 'paid');

    function card(r) {
      return `
        <div class="resource-card ${r.type}">
          <div class="resource-platform">${r.platform}</div>
          <div class="resource-title">${r.title}</div>
          <div class="resource-meta">
            <span class="resource-type-badge ${r.type}">${r.type}</span>
            ${r.price
              ? `<span class="resource-price">${r.price}</span>`
              : (r.duration ? `<span class="resource-duration">⏱ ${r.duration}</span>` : '')}
          </div>
          <a href="${r.url}" target="_blank" rel="noopener" class="resource-link">
            Open Course →
          </a>
        </div>
      `;
    }

    return `
      <div class="resources-section free-section">
        <h5>🆓 Free Resources (Start Here)</h5>
        <div class="resource-cards">
          ${free.map(card).join('')}
        </div>
      </div>
      <hr class="section-divider">
      <div class="resources-section paid-section">
        <h5>💎 Premium Courses (Level Up)</h5>
        <div class="resource-cards">
          ${paid.map(card).join('')}
        </div>
      </div>
    `;
  }

  /* ─── Mobile Accordion ───────────────────────── */
  function renderMobileAccordion(skill) {
    const sections = [
      { id: 'mob-overview', label: '📋 Overview', html: renderOverview(skill) },
      { id: 'mob-roadmap',  label: '🗺️ Roadmap',  html: renderRoadmapTab(skill) },
      { id: 'mob-demand',   label: '📊 Market Demand', html: renderDemand(skill) },
      { id: 'mob-resources',label: '📚 Resources', html: renderResources(skill) }
    ];
    const html = sections.map((sec, i) => `
      <div class="mb-2">
        <button class="accordion-btn ${i > 0 ? 'collapsed' : ''}"
                data-bs-toggle="collapse"
                data-bs-target="#${sec.id}">
          ${sec.label}
          <span class="accordion-chevron">${i === 0 ? '▲' : '▼'}</span>
        </button>
        <div id="${sec.id}" class="collapse ${i === 0 ? 'show' : ''}">
          <div class="accordion-body">${sec.html}</div>
        </div>
      </div>
    `).join('');
    $('#mobile-accordion').html(html);

    // Draw SVG in mobile accordion too
    setTimeout(() => {
      if ($('#mob-roadmap').hasClass('show')) drawRoadmapSVG(skill);
      $('#mob-roadmap').on('shown.bs.collapse', () => drawRoadmapSVG(skill));
    }, 50);

    // Update chevrons
    $(document).on('show.bs.collapse hide.bs.collapse', '.mobile-accordion .collapse', function (e) {
      const $btn = $(`[data-bs-target="#${$(this).attr('id')}"]`);
      $btn.find('.accordion-chevron').text(e.type === 'show' ? '▲' : '▼');
    });
  }

  /* ─── Welcome Chips (pre-populate) ──────────── */
  const featuredIds = ['react', 'python', 'seo', 'flutter', 'wp-theme'];
  const $chips = $('#welcome-chips');
  featuredIds.forEach(id => {
    const s = skills.find(sk => sk.id === id);
    if (s) {
      $chips.append(`<span class="welcome-chip" data-id="${id}">${s.name}</span>`);
    }
  });

  /* ─── Stats in welcome area ──────────────────── */
  $('#stat-skills').text(skills.length);
});
