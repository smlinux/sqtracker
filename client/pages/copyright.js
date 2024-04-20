import React, { useContext } from "react";
import getConfig from "next/config";
import SEO from "../components/SEO";
import Text from "../components/Text";
import LocaleContext from "../utils/LocaleContext";

const Copyright = () => {
  const {
    publicRuntimeConfig: { SQ_BASE_URL },
  } = getConfig();

  const { getLocaleString } = useContext(LocaleContext);

  return (
    <>
      <SEO title={getLocaleString("copyrightHolders")} />
      <Text as="h2" mb={4}>
        {getLocaleString("copyrightHolders")}
      </Text>
      <Text as="h3" mb={4}>
        {getLocaleString("copyrightHoldersYou")}{" "}
        <strong>{SQ_BASE_URL}</strong>.
      </Text>
      <Text mb={4}>{getLocaleString("copyrightHoldersInfo1")}</Text>
      <Text mb={4}>{getLocaleString("copyrightHoldersInfo2")}</Text>
      <Text as="h4" mb={4}>{getLocaleString("copyrightHoldersInfo3")}</Text>
      <Text mb={4}>{getLocaleString("copyrightHoldersInfo4")}</Text>
      <Text mb={4}>{getLocaleString("copyrightHoldersInfo5")}</Text>
      <Text mb={4}>{getLocaleString("copyrightHoldersInfo6")}</Text>
      <Text mb={4}>{getLocaleString("copyrightHoldersInfo7")}</Text>
      <Text as="h4" mb={4}>{getLocaleString("copyrightHoldersInfo8")}</Text>
      <Text mb={4}>{getLocaleString("copyrightHoldersInfo9")}</Text>
      <Text mb={4}>{getLocaleString("copyrightHoldersInfo10")}</Text>
      <Text mb={4}>{getLocaleString("copyrightHoldersInfo11")}</Text>
    </>
  );
};

export default Copyright;
