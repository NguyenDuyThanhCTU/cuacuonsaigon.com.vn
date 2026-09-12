"use client";

import { notification } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

import { uploadImage } from "./FirebaseStorage";

interface ImageUploaderProps {
  setForm: (value: any) => void;
  Form?: any;
  Field?: any;
  PlaceHolder?: any;
}

export const ImageUploader = ({
  setForm,
  Field,
  Form,
}: ImageUploaderProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    notification.info({
      message: "Đang tải lên",
      description: "Vui lòng chờ trong giây lát",
    });

    const file = acceptedFiles[0];
    uploadImage(file, "avatar").then((url) => {
      if (!url) {
        return;
      }

      setForm({ ...Form, [Field]: url });
      setUploadedFile(file);
      notification.success({
        message: "Tải lên thành công",
        description: "Ảnh đã được tải lên thành công",
      });
    });
  };

  useEffect(() => {
    if (Form === undefined) {
      setUploadedFile(null);
    }
  }, [Form]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-full max-w-xs mx-auto cursor-pointer">
      <div
        {...getRootProps()}
        className={`bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-6 text-center ${
          isDragActive ? "border-blue-500" : ""
        }`}
      >
        <input {...getInputProps()} />
        {Form?.image !== undefined ? (
          <Image
            width={100}
            height={100}
            src={Form[Field]}
            alt="Uploaded"
            className="w-full h-auto mb-4 rounded-lg"
          />
        ) : uploadedFile ? (
          <Image
            height={100}
            width={100}
            src={URL.createObjectURL(uploadedFile)}
            alt="Uploaded"
            className="w-full h-auto mb-4 rounded-lg"
          />
        ) : (
          <div>
            <FaCloudUploadAlt className="mx-auto text-4xl mb-2 text-gray-600" />
            <p>Drag & Drop or Click to Upload</p>
          </div>
        )}
      </div>
    </div>
  );
};
