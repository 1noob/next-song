import * as React from "react";
import { cn } from "lib/utils";
import type { PolymorphicComponentProps } from "types";
import type { Sprinkles } from "styles/sprinkles.css";
import { sprinkles } from "styles/sprinkles.css";
import * as styles from "./Text.css";

type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    as?: "p" | "span" | "strong" | "em" | "time";
    fontSize?: Sprinkles["fontSize"];
    fontWeight?: Sprinkles["fontWeight"];
    color?: Extract<
      Sprinkles["color"],
      "foreground" | "foregroundNeutral" | "foregroundAction"
    >;
  }
>;

const Text = <C extends React.ElementType = "p">({
  as,
  fontSize = "md",
  fontWeight = "normal",
  color = "foreground",
  ...restProps
}: TextProps<C>) => {
  const component = as || "p";
  return React.createElement(component, {
    className: cn(styles.root, sprinkles({ fontSize, fontWeight, color })),
    ...restProps,
  });
};

export { Text };
