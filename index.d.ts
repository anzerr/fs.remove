
declare const remove: (dir: string, option?: {max?: number}) => Promise<string | {[key: string]: string}>;
export default remove;
export {};