import React, { useContext } from "react";
import getConfig from "next/config";
import SEO from "../components/SEO";
import Text from "../components/Text";
import LocaleContext from "../utils/LocaleContext";

const Rules = () => {
  const {
    publicRuntimeConfig: { SQ_BASE_URL },
  } = getConfig();

  const { getLocaleString } = useContext(LocaleContext);

  return (
    <>
      <SEO title={getLocaleString("ruleRules")} />
      <Text as="h2" mb={4}>
        {getLocaleString("ruleRules")}
      </Text>
      <Text as="h3" mb={4}>
        {getLocaleString("ruleRulesApplySite")}{" "}
        <strong>{SQ_BASE_URL}</strong>.
      </Text>
      <Text as="h4" mb={4}>{getLocaleString("ruleProhibitContent")}</Text>
      <Text mb={4}>{getLocaleString("ruleProhibitContents1")}</Text>
      <Text mb={4}>{getLocaleString("ruleProhibitContents2")}</Text>
      <Text mb={4}>{getLocaleString("ruleProhibitContents3")}</Text>
      <Text mb={4}>{getLocaleString("ruleProhibitContents4")}</Text>
      <Text mb={4}>{getLocaleString("ruleProhibitContents5")}</Text>
      <Text mb={4}>{getLocaleString("ruleProhibitContents6")}</Text>
      <Text mb={4}>{getLocaleString("ruleProhibitContents7")}</Text>
      <Text mb={4}>{getLocaleString("ruleProhibitContents8")}</Text>
      <Text mb={4}>{getLocaleString("ruleProhibitContents9")}</Text>
    </>
  );
};

export default Rules;
