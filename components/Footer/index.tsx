import React, { SyntheticEvent, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Link } from "../Link";
import { ArrowRightTailIcon, UmaLogoIcon } from "../Icons";
import { Container, Content, ContentItem, FooterHeading, NavContainer, NavLink, NavLinks, NewsletterFormContainer, NewsletterText, NewsletterForm, NewsletterInputContainer, Input, SubmitButton, FormMessage } from "./components";
import { LINKS } from "../../utils";

const LINKS_LIST = [
  {
    name: "Docs",
    href: LINKS.docs,
  },
  { name: "FAQS", href: LINKS.faq },
  { name: "Contact", href: "mailto:hello@umaproject.org" },
  {
    name: "Getting Started",
    href: LINKS.getStarted,
  },
  { name: "Vote", href: LINKS.vote },
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
            {LINKS_LIST.slice(0, LINKS_LIST.length / 2).map((link, idx) => (
              <li key={idx}>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </NavLinks>
          <NavLinks>
            {LINKS_LIST.slice(LINKS_LIST.length / 2).map((link, idx) => (
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
