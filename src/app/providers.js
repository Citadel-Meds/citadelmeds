"use client";

import React from "react";
import { QuoteModalProvider } from "../../components/QuoteModal/QuoteModalProvider";

export default function Providers({ children }) {
  return <QuoteModalProvider>{children}</QuoteModalProvider>;
}

