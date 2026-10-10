/* eslint-disable @next/next/no-img-element */
"use client";
import { useQuoteModal } from "../../../components/QuoteModal/QuoteModalProvider";
export default function QuoteButton({ iconSrc = "/images/about-us/arrow-white.svg" }) {
  const { openQuoteModal } = useQuoteModal();
  return <button type="button" onClick={openQuoteModal}>Request a Free Quote<img src={iconSrc} alt="" /></button>;
}
