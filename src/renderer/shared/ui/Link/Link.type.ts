/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AnchorHTMLAttributes,
  CSSProperties,
  ComponentPropsWithRef,
  ElementType,
} from "react";

import { ButtonOwnProps } from "renderer/shared/ui/Button";

type AnchorAttributes = AnchorHTMLAttributes<HTMLAnchorElement>;

export type LinkOwnProps = AnchorAttributes &
  Omit<ButtonOwnProps, "buttonRef"> & {
    type?: "button" | "text";
  };

export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends ElementType>(
    props: OverrideProps<M, C> & {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    },
  ): JSX.Element;
  (props: DefaultComponentProps<M>): JSX.Element;
}

/**
 * Props of the component if `component={Component}` is used.
 */
// prettier-ignore
export type OverrideProps<
    M extends OverridableTypeMap,
    C extends ElementType
> = (
    & BaseProps<M>
    & DistributiveOmit<ComponentPropsWithRef<C>, keyof BaseProps<M>>
    );

/**
 * Props if `component={Component}` is NOT used.
 */
// prettier-ignore
export type DefaultComponentProps<M extends OverridableTypeMap> =
    & BaseProps<M>
    & DistributiveOmit<ComponentPropsWithRef<M["defaultComponent"]>, keyof BaseProps<M>>;

/**
 * Props defined on the component (+ common material-ui props).
 */
// prettier-ignore
export type BaseProps<M extends OverridableTypeMap> =
    CommonProps & M["props"];

/**
 * Props that are valid for material-ui components.
 */
// each component declares it's classes in a separate interface for proper JSDoc.
export interface CommonProps {
  className?: string;
  style?: CSSProperties;
}

export interface OverridableTypeMap {
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: {};
  defaultComponent: ElementType;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface LinkTypeMap<P = {}, D extends ElementType = "a"> {
  props: DistributiveOmit<LinkBaseProps, "classes"> & LinkOwnProps & P;
  defaultComponent: D;
}

export type LinkBaseProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "color"
>;

export type LinkProps<
  D extends ElementType = LinkTypeMap["defaultComponent"],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
> = OverrideProps<LinkTypeMap<P, D>, D>;
