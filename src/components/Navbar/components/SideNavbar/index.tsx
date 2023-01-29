import { FC, MouseEvent, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

interface ISideNavbar {
  isOpen: boolean;
  closeNav: () => void;
  onClose: (el?: any) => void;
}

export const downloadWarning = (event: MouseEvent<HTMLAnchorElement>) => {
  const result = window.confirm(
    "Note: You are about to download Bedrock Launcher. Please be aware this launcher does not pirate Minecraft. You must either purchase the game, or have Gamepass in order to play."
  );

  if (!result) event.preventDefault();
};

const SideNavbar: FC<ISideNavbar> = ({ isOpen, onClose, closeNav }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      isOpen &&
        ref.current !== null &&
        !ref.current.contains(e.target) &&
        closeNav();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, closeNav]);

  return (
    <div className={"sidebar" + (isOpen ? " open" : "")} ref={ref}>
      <div className="container">
        <nav>
          <h3>Categories</h3>
          <h4>FAQ</h4>
          <ul>
            <li>
              <Link to="/faq" onClick={onClose}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/faq/data" onClick={onClose}>
                Data FAQ
              </Link>
            </li>
            <li>
              <Link to="/faq/accounts" onClick={onClose}>
                Accounts FAQ
              </Link>
            </li>
            <li>
              <Link to="/faq/versions" onClick={onClose}>
                Versions FAQ
              </Link>
            </li>
            <li>
              <Link to="/faq/misc" onClick={onClose}>
                Miscellaneous FAQ
              </Link>
            </li>
          </ul>
          <h4>Releases</h4>
          <ul>
            <li>
              <Link to="/releases" onClick={onClose}>
                Releases
              </Link>
            </li>
            <li>
              <Link to="/releases/public" onClick={onClose}>
                Public Releases
              </Link>
            </li>
            <li>
              <Link to="/releases/beta" onClick={onClose}>
                Beta Releases
              </Link>
            </li>
          </ul>
          <h3>Docs</h3>
          <h4>Dev Info</h4>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/BedrockLauncher/BedrockLauncher/"
                onClick={onClose}
              >
                Launcher Source
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/BedrockLauncher/BedrockLauncher.github.io"
                onClick={onClose}
              >
                Website Source
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://crowdin.com/projects/bedrocklauncher"
                onClick={onClose}
              >
                Localization
              </a>
            </li>
            <li>
              <Link to="/docs/dev/compiling" onClick={onClose}>
                Compiling
              </Link>
            </li>
            <li>
              <Link to="/docs/dev/contributing" onClick={onClose}>
                Contributing
              </Link>
            </li>
            <li>
              <Link to="/docs/dev/dev-software-prerequisites" onClick={onClose}>
                Dev Software Prerequisites
              </Link>
            </li>
            <li>
              <Link to="/docs/dev/software-prerequisites" onClick={onClose}>
                Software Prerequisites
              </Link>
            </li>
            <li>
              <Link to="/docs/dev/hardware-prerequisites" onClick={onClose}>
                Hardware Prerequisites
              </Link>
            </li>
          </ul>
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/docs/legal/code-of-conduct" onClick={onClose}>
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link to="/docs/legal/disclaimers" onClick={onClose}>
                Disclaimers
              </Link>
            </li>
            <li>
              <Link to="/docs/legal/license" onClick={onClose}>
                License
              </Link>
            </li>
          </ul>
          <h3>Others</h3>
          <ul>
            <li>
              <a rel="noreferrer" href="/downloads" onClick={downloadWarning}>
                Download Launcher
              </a>
            </li>
            <li>
              <a rel="noreferrer" href="/search">
                Search
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavbar;
