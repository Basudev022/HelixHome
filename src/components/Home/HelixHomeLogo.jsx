import "./HelixHomeLogo.css";

const HelixHomeLogo = () => {
  return (
    <div className="helix-logo">
      <svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
        {/* Roof */}
        <path
          d="M15 48 L60 8 L105 48"
          fill="none"
          stroke="#ffffff"
          strokeWidth="10"
          strokeLinecap="square"
        />

        {/* Right roof */}
        <path d="M82 29 V17 H96 V42" fill="#ffffff" />

        {/* Left helix */}
        <path
          d="
            M60 27
            C35 42 31 61 44 78
            C52 89 68 94 77 106
            C87 120 82 139 68 151
          "
          fill="none"
          stroke="#ffffff"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Right helix */}
        <path
          d="
            M60 27
            C85 42 89 61 76 78
            C68 89 52 94 43 106
            C33 120 38 139 52 151
          "
          fill="none"
          stroke="#ffffff"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Top window */}
        <rect x="49" y="45" width="22" height="22" fill="#ffffff" />

        <line
          x1="60"
          y1="45"
          x2="60"
          y2="67"
          stroke="#07111a"
          strokeWidth="2"
        />

        <line
          x1="49"
          y1="56"
          x2="71"
          y2="56"
          stroke="#07111a"
          strokeWidth="2"
        />

        {/* Bottom window */}
        <rect x="49" y="105" width="22" height="22" fill="#ffffff" />

        <line
          x1="60"
          y1="105"
          x2="60"
          y2="127"
          stroke="#07111a"
          strokeWidth="2"
        />

        <line
          x1="49"
          y1="116"
          x2="71"
          y2="116"
          stroke="#07111a"
          strokeWidth="2"
        />
      </svg>

      <div className="logo-text">Helix Home</div>
    </div>
  );
};

export default HelixHomeLogo;
