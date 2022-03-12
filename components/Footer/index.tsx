import React, { SyntheticEvent, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Link } from "../Link";
import { ArrowRightTailIcon, UmaLogoIcon } from "../Icons";
import * as UI from "./components";
import { constants } from "../../utils";

const { LINKS } = constants;
const LINKS_LIST = [
  {
    name: "Docs",
    href: LINKS.docs,
  },
  { name: "FAQs", href: LINKS.faq },
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
  <UI.Container>
    <UI.Content>
      <UI.ContentItem>
        <Link href="/">
          <UmaLogoIcon style={{ width: 100, height: 25, color: "var(--primary)" }} />
        </Link>
        <NewsletterFormComponent />
      </UI.ContentItem>
      <UI.ContentItem>
        <UI.NavContainer>
          <UI.NavLinks>
            {LINKS_LIST.slice(0, LINKS_LIST.length / 2).map((link, idx) => (
              <li key={idx}>
                <UI.NavLink href={link.href}>{link.name}</UI.NavLink>
              </li>
            ))}
          </UI.NavLinks>
          <UI.NavLinks>
            {LINKS_LIST.slice(LINKS_LIST.length / 2).map((link, idx) => (
              <li key={idx}>
              <UI.NavLink href={link.href}>{link.name}</UI.NavLink>
            </li>
            ))}
          </UI.NavLinks>
        </UI.NavContainer>
      </UI.ContentItem>
    </UI.Content>
  </UI.Container>
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
    <UI.NewsletterFormContainer>
      <UI.FooterHeading>Get UMA Updates</UI.FooterHeading>
      <UI.NewsletterText>
        Sign up for our newsletter to stay updated about the UMA project.
      </UI.NewsletterText>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <UI.NewsletterForm
            onSubmit={(evt: SyntheticEvent<HTMLFormElement>) => {
              evt.preventDefault();
              // @ts-expect-error Doesn't like the input being taken like this
              subscribe({ EMAIL: evt.target[0].value });
            }}
          >
            <UI.NewsletterInputContainer highlighted={inputFocused}>
              <UI.Input
                type="email"
                name="email"
                placeholder="satoshi@example.com"
                onFocus={onFocusInput}
                onBlur={onBlurInput}
              />
              <UI.SubmitButton type="submit">
                <ArrowRightTailIcon />
              </UI.SubmitButton>
            </UI.NewsletterInputContainer>
            {status === "sending" && <UI.FormMessage>sending...</UI.FormMessage>}
            {status === "error" && (
              <UI.FormMessage
                style={{ color: "var(--primary)" }}
                dangerouslySetInnerHTML={{ __html: message as string }}
              />
            )}
            {status === "success" && (
              <UI.FormMessage>Subscribed !</UI.FormMessage>
            )}

          </UI.NewsletterForm>
        )}
      />
    </UI.NewsletterFormContainer>
  );
}
