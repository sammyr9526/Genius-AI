"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fe6f09a9-54ff-48e2-810f-ea28af75f834");
  }, []);

  return null;
};
