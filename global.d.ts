declare module 'classnames' {
  export default function classNames(
    ...args: (string | undefined | null | { [key: string]: boolean })[]
  ): string;
}
