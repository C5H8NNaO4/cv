import { Typography } from '@mui/material';
import { ReactNode } from 'react';

const Text = Typography

const Wrap = {
  Always: () => true,
  Never: () => false,
  WordEnding: (e: string, i: number, arr: WrappedItem[]) => {
    return (
      (i > 0 || (typeof arr[i + 1] !== 'string' && !e.endsWith(' '))) &&
      typeof arr[i - 1] !== 'string' &&
      e != ' '
    );
  },
} as const;

type Keys = keyof typeof Wrap;
type WrappedItem = ReactNode;
export type HighlightedTextProps = {
  children?: string;
  highlight: string | string[];
  onClick?: React.MouseEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  className?: string;
  HighlightComponent?: React.ElementType;
  Component?: React.ElementType;
  shouldWrap?: (typeof Wrap)[Keys];
  transform?: (str: string) => string;
  /** Flags passed to the RegExp. Pass i for case insensitivity */
  flags?: string;
};

/**
 * Highlighted Text Component. Highlights the text passed in the highlight prop.
 *
 * Wraps **both**, matched and optionally unmatched text in containers.
 *
 * You can configure different wrappers for matched and unmatched text.
 * You can **bold** **Pa***rts* of a text and italize the rest.
 *
 * Supports highlighting multiple words / regexes.
 *
 */
export const HighlightedText: React.FC<HighlightedTextProps> = (props) => {
  const {
    children,
    highlight,
    onClick,
    onKeyDown,
    className,
    HighlightComponent = 'mark',
    Component = 'em',
    shouldWrap = Wrap.WordEnding,
    transform,
    flags = 'ig',
  } = props;

  if (!children) {
    return null;
  }

  const process = (input: string, highlight: string) => {
    const regex = new RegExp(highlight || '', flags);
    return input
      ?.split(regex)
      ?.reduce((acc: ReactNode[], cur: string, index: number) => {
        const [left, ...right] = cur.split(' ');
        const joined = right.join(' ');
        const subStr = left + (right.length > 0 ? ' ' : '');

        return [
          ...acc,
          subStr,
          joined,
          <HighlightComponent key={`HighlightComponent-${highlight}-${index}`}>
            {transform?.(highlight || '') || highlight}
          </HighlightComponent>,
        ].filter(Boolean);
      }, [] as ReactNode[])
      .slice(0, -1);
  };

  const parts = [highlight]
    .flat()
    .reduce(
      (acc, highlight: string) => {
        const ret = acc
          .map((e) => (typeof e === 'string' ? process(e, highlight) : e))
          .flat();
        return ret as WrappedItem[];
      },
      [children] as WrappedItem[]
    )
    .map((ele: string | WrappedItem, i: number, arr: WrappedItem[]) => {
      return typeof ele === 'string' && Component && shouldWrap(ele, i, arr) ? (
        <Component key={`WrappedItem-${i}`}>{ele}</Component>
      ) : (
        ele
      );
    });

  return (
    <Text
      className={className}
      role={onClick ? 'button' : undefined}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {parts}
    </Text>
  );
};
