import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const FooterComp = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{ base: "12", md: "3" }}
    style={{ maxWidth: "100%" }}
  >
    <hr />
    <Stack
      spacing={{ base: "4", md: "5" }}
      style={{
        width: "auto",
        paddingTop: "1rem",
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <img width={"20px"} height={"20px"} src="/logo.png" alt="" />

        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/sanyam-mehendiratta-2b0640190/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="https://github.com/Sanyam2000-dot"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="https://twitter.com/__waitforit___"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle" align={"center"}>
        &copy; {new Date().getFullYear()} CurE, All rights reserved.
      </Text>
    </Stack>
  </Container>
);
