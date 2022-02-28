import React, { SyntheticEvent, useState } from "react";
import styled from "@emotion/styled";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Image from "next/image";
import { Link } from "../Link";
import { ArrowRightTailIcon, UmaLogoIcon } from "../Icons";
import { BaseButton } from "../Button/BaseButton";
import { QUERIES } from "../../utils";
import { Container, Content, ContentItem, FooterHeading, NavContainer, NavLink, NavLinks, NewsletterFormContainer, NewsletterText, NewsletterForm, NewsletterInputContainer, Input, SubmitButton } from "./components";

const LINKS = [
  {
    name: "Docs",
    href: "https://docs.umaproject.org",
  },
  { name: "FAQS", href: "https://umaproject.org/faq.html" },
  { name: "Contact", href: "mailto:hello@umaproject.org" },
  {
    name: "Getting Started",
    href: "https://docs.umaproject.org/build-walkthrough/build-process",
  },
  { name: "Vote", href: "https://vote.umaproject.org/" },
  { name: "Careers", href: "https://angel.co/company/uma-project/jobs" },
];

const MAILCHIMP_URL =
  "https://umaproject.us19.list-manage.com/subscribe/post?u=b2e789cb476a06f1261e79e05&id=85dfd6c316";

export const Footer: React.FC = () => (
  <Container>
    <Content>
      <ContentItem>
        <Link href="/">
          <UmaLogoIcon style={{ width: 100, height: 25, color: "var(--primary)" }} />
        </Link>
        <NewsletterFormComponent />
      </ContentItem>
      <ContentItem>
        <NavContainer>
          <NavLinks>
            {LINKS.slice(0, LINKS.length / 2).map((link, idx) => (
              <li key={idx}>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </NavLinks>
          <NavLinks>
            {LINKS.slice(LINKS.length / 2).map((link, idx) => (
              <li key={idx}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
            ))}
          </NavLinks>
        </NavContainer>
      </ContentItem>
    </Content>
  </Container>
);

const NewsletterFormComponent: React.FunctionComponent = () => {
  const [inputFocused, setInputFocused] = useState(false);

  const onFocusInput = () => {
    setInputFocused(true);
  }

  const onBlurInput = () => {
    setInputFocused(false);
  }

  return (
    <NewsletterFormContainer>
      <FooterHeading>Get UMA Updates</FooterHeading>
      <NewsletterText>
        Sign up for our newsletter to stay updated about the UMA project.
      </NewsletterText>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <NewsletterForm
            onSubmit={(evt: SyntheticEvent<HTMLFormElement>) => {
              evt.preventDefault();
              // @ts-expect-error Doesn't like the input being taken like this
              subscribe({ EMAIL: evt.target[0].value });
            }}
          >
            <NewsletterInputContainer highlighted={inputFocused}>
              <Input
                type="email"
                name="email"
                placeholder="satoshi@example.com"
                onFocus={onFocusInput}
                onBlur={onBlurInput}
              />
              <SubmitButton type="submit">
                <ArrowRightTailIcon />
              </SubmitButton>
            </NewsletterInputContainer>
            {status === "sending" && <FormMessage>sending...</FormMessage>}
            {status === "error" && (
              <FormMessage
                style={{ color: "var(--primary)" }}
                dangerouslySetInnerHTML={{ __html: message as string }}
              />
            )}
            {status === "success" && (
              <FormMessage>Subscribed !</FormMessage>
            )}

          </NewsletterForm>
        )}
      />
    </NewsletterFormContainer>
  );
}

const ListItem = styled.li`
  font-weight: bold;
  width: fit-content;
  transition: all ease-in 0.1s;

  &:hover {
    box-shadow: 0px 3px 0px 0px var(--primary);
  }
`;

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  max-height: 160px;
  & > ol:first-of-type {
    padding-right: 90px;
  }
`;

const Form = styled.form`
  max-width: 320px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const FormMessage = styled.div`
  margin: 10px 0 0;
  font-size: ${14 / 16}rem;
  color: var(--gray-700);

  & > a {
    color: currentColor;
  }
`;

