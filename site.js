// "Copy for LLM" — copies a clean, plain-text profile to the clipboard
// so anyone can paste it into ChatGPT/Claude and ask about Parth.
var LLM_PROFILE = [
  "# Parth Goyal",
  "Quantitative researcher at Orbis Investments (London) and data-driven economics writer.",
  "",
  "## About",
  "I build systematic investment signals and risk models at Orbis Investments, and I write data-driven economics for a general audience at Parth's Datastack. The thread through both: how talent and capital get allocated, and what it costs when they are misallocated.",
  "",
  "## Writing — Parth's Datastack (parthsdatastack.substack.com)",
  "- The Great Talent Misallocation: why so much elite talent pours into finance, and when that becomes everyone's problem.",
  "- Creative Destruction: the 2025 economics Nobel, on how fading competition and rising markups throttle growth.",
  "",
  "## Background",
  "- Quantitative Researcher, Orbis Investments (2024-present): systematic stock-selection signals, custom factor and risk models, and LLM-based signals from earnings-call transcripts.",
  "- BSc Financial Economics & Mathematics, University of St Andrews (2:1). Maths dissertation: a 5,000-agent simulation of how a population polarises on political dimensions (live app: modelling-political-polarization.streamlit.app).",
  "- CFA Level I (passed).",
  "- Co-founder & Program Director, St Andrews AI Safety (STAISH).",
  "",
  "## Links",
  "- Website: https://parthgoyal.uk",
  "- Substack: https://parthsdatastack.substack.com",
  "- LinkedIn: https://linkedin.com/in/parthg1206",
  "- GitHub: https://github.com/ParthG60"
].join("\n");

function copyForLLM(btn) {
  navigator.clipboard.writeText(LLM_PROFILE).then(function () {
    var original = btn.getAttribute("data-label") || btn.textContent;
    btn.setAttribute("data-label", original);
    btn.textContent = "Copied!";
    setTimeout(function () { btn.textContent = original; }, 1600);
  }).catch(function () {
    btn.textContent = "Press Ctrl+C";
    setTimeout(function () { btn.textContent = "Copy for LLM"; }, 1600);
  });
}
