import React from "react";
import { useState } from "react";
import Faq from "./Faq";

const FaqList = ({ faq }) => {
  let [faqModal, setFaqModal] = useState(false);
  const [faqIdx, setFaqIdx] = useState(console.log(faq));

  return (
    <>
      {faq &&
        faq.map((faq) => (
          <>
            <tr
              key={faq}
              onClick={() => {
                setFaqIdx(faq.faqIdx);
              }}
            >
              <td>{faq.faqIdx}</td>
              <td
                onClick={() => {
                  setFaqModal(!faqModal);
                }}
              >
                {faq.faqClass}
              </td>
              <td>{faq.faqTitle}</td>
            </tr>
            {faqModal === true && faqIdx === faq.faqIdx ? (
              <Faq faq={faq} value={faq.faqIdx} />
            ) : null}
          </>
        ))}
    </>
  );
};

export default FaqList;
