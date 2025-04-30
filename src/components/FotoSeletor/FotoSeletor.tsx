import React, { useState, ChangeEvent } from "react";

interface FotoSeletorProps {
  onImageSelect?: (file: File) => void;
  alturaImagem: number;
  larguraImagem: number;
  arredondamento: number;
  descricao: string;
  guardarImagem: (file: File) => void;
}

const FotoSeletor: React.FC<FotoSeletorProps> = ({ onImageSelect, alturaImagem, larguraImagem, arredondamento, descricao, guardarImagem }) => {
  const [preURL, setPreURL] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreURL(URL.createObjectURL(file));
      if (onImageSelect) {
        onImageSelect(file);
        guardarImagem(file);
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <label
        htmlFor={`${descricao.split(" ").join("-")}-input`}
        style={{
          display: "inline-block",
          width: larguraImagem,
          height: alturaImagem,
          borderRadius: `${arredondamento}%`,
          backgroundColor: "#f0f0f0",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
        }}
      >
        {preURL ? (
          <img
            src={preURL}
            alt="Preview"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="text-zero text-center"
          >
            {descricao}
          </span>
        )}
      </label>

      <input
        type="file"
        id={`${descricao.split(" ").join("-")}-input`}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default FotoSeletor;
