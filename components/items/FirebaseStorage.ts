"use client";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "@config/firebase/Firebase";

export const uploadImage = async (fileOrEvent: any, locate: any) => {
  try {
    let selectImage;

    if (fileOrEvent.target && fileOrEvent.target.files) {
      selectImage = fileOrEvent.target.files[0];
    } else {
      selectImage = fileOrEvent;
    }

    const filetypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];

    if (!selectImage || !filetypes.includes(selectImage.type)) {
      return null;
    }

    const storageRef = ref(
      storage,
      `${locate}/${selectImage.name}`
    );

    const snapshot = await uploadBytes(
      storageRef,
      selectImage
    );

    const url = await getDownloadURL(snapshot.ref);

    return url;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};
