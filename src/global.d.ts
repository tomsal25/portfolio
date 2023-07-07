type CSSModuleClasses = Readonly<Record<string, string>>;
const classes: CSSModuleClasses;

declare module "*.module.scss" {
  export default classes;
}
declare module "*.module.css" {
  export default classes;
}

declare module "*.scss";
declare module "*.css";
