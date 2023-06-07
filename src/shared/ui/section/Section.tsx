import cn from "classnames";
import { FC } from "react";

import { PropsOf } from "@/shared/types";

import { Container } from "../container";

import s from "./Section.module.scss";

export interface SectionProps extends PropsOf<"section"> {
  title?: string;
  description?: string;
}

export const Section: FC<SectionProps> = (props) => {
  const { title, description, className, children, id, ...rest } = props;

  return (
    <section id={id} className={cn(s._, className)} {...rest}>
      {(title || description) && (
        <Container className={s.header}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.description}>{description}</p>
        </Container>
      )}
      <div className={s.body}>{children}</div>
    </section>
  );
};
