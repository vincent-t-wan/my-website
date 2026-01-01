/**
 * Tool to Icon mapping configuration
 * Maps project tools/technologies to their corresponding icons and CSS classes
 */
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiAndroidstudio,
  SiKotlin,
  SiUnity,
  SiCsharp,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiC,
  SiCockroachlabs,
  SiOpenai,
  SiRstudio,
  SiFirebase,
} from 'react-icons/si';

/**
 * Configuration object mapping tool names to their icon components and CSS classes
 * @type {Object.<string, {icon: React.ComponentType, className: string}>}
 */
export const TOOL_ICON_MAP = {
  'C++': { icon: SiCplusplus, className: 'cpp' },
  'HTML': { icon: SiHtml5, className: 'html' },
  'CSS': { icon: SiCss3, className: 'css' },
  'JavaScript': { icon: SiJavascript, className: 'js' },
  'Node.js': { icon: SiNodedotjs, className: 'njs' },
  'React': { icon: SiReact, className: 'react' },
  'Android Studio': { icon: SiAndroidstudio, className: 'android' },
  'Kotlin': { icon: SiKotlin, className: 'kotlin' },
  'Unity': { icon: SiUnity, className: 'unity' },
  'C#': { icon: SiCsharp, className: 'csharp' },
  'PostgreSQL': { icon: SiPostgresql, className: 'postgresql' },
  'Python': { icon: SiPython, className: 'python' },
  'Docker': { icon: SiDocker, className: 'docker' },
  'CLanguage': { icon: SiC, className: 'c' },
  'CockroachDB': { icon: SiCockroachlabs, className: 'cockroachdb' },
  'Firebase': { icon: SiFirebase, className: 'firebase' },
  'RStudio': { icon: SiRstudio, className: 'r' },
  'Openai': { icon: SiOpenai, className: 'openai' },
};

/**
 * Get the list of tool names that are supported
 * @returns {string[]} Array of supported tool names
 */
export const getSupportedTools = () => Object.keys(TOOL_ICON_MAP);
