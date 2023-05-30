import React, { useState } from "react";
import { document } from "../../../../content/document";
import { TbFileInvoice } from "react-icons/tb";
import { BiUpload } from "react-icons/bi";
import "./Mydocument.scss";
import { images } from "../../../../asset";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Mydocument() {
  const [modalImage, setModalImage] = useState(images.seren);
  const [toggle, setToggle] = useState(false);
  const handleSeren = () => {
    setModalImage(images.seren);
    setToggle(true);
  };
  const handleKrcibs = () => {
    setModalImage(images.kcibs);
    setToggle(true);
  };
  return (
    <div className="">
      <div className="Mydocument">
        <div className="bg-[#f3f3f3] rounded-lg px-4 py-7 md:p-7 md:w-[80%]">
          <p className="text-md font-bold text-center">
            La déclaration de vos revenus à l’administration fiscale est
            obligatoire. Informations relatives aux régime fiscal et à la
            réglementation sociale applicables à vos revenus: Impôts, URSSAF
          </p>
        </div>
        <p className="title mt-7">My Documents</p>
        <p className="text-md font-light mt-1">
          Here are documents associated with your driver profile.
        </p>
        <div className="md:w-[80%]  flex flex-col space-y-5">
          {document.map((doc, index) => {
            return (
              <div
                className="doc__box py-4 px-2 rounded-lg md:px-8"
                key={index}
              >
                <div className="bg-red-600 rounded-md p-3">
                  <p className="text-left text-white text-sm">
                    Expire dans 6 jours
                  </p>
                </div>
                <h4 className="text-lg font-bold mt-2">{doc.type}</h4>
                <div className="doc__content flex flex-col w-[100%]">
                  <div className="left__con">
                    <p className="text-sm font-bold">Verified Document</p>
                    <div className="flex mt-3">
                      <TbFileInvoice
                        size={20}
                        className="text-green-600 mr-3"
                      />
                      <p className="text-sm font-light">{doc.name}</p>
                    </div>
                    <div className="my-3">
                      <p className="text-sm mt-1 font-light">
                        Uploaded: {doc.Uploaded}
                      </p>
                      <p className="text-sm mt-1 font-light">
                        Expired: {doc.Expires}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <p className="font-bold text-md mt-4">Expire le </p>
                    <div className="">
                      <p className="text-sm font-light bg-gray-200 p-2 text-center my-2">
                        Année
                      </p>
                      <p className="text-sm font-light bg-gray-200 p-2 text-center my-2">
                        Mois
                      </p>
                      <p className="text-sm font-light bg-gray-200 p-2 text-center my-2">
                        Jour
                      </p>
                    </div>
                  </div>
                  <div className=" mt-2">
                    <label
                      htmlFor="file-upload"
                      className="text-md font-bold py-3 px-4 rounded-xl bg-green-600 text-white justify-center items-center flex max-w-[50%] md:max-w-[20%]"
                    >
                      <BiUpload size={20} className="text-white mr-2" /> Upload
                      file
                    </label>
                    <input id="file-upload" type="file" className="hidden" />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="doc__box py-4 px-2 rounded-lg md:px-8">
            <h4 className="text-lg font-bold mt-2">Extrait KBIS</h4>
            <p className="text-sm font-bold text-red-600 leading-5 mt-3">
              Obligatoire *
            </p>
            <ul className="mt-5">
              <li
                className="text-green-600 cursor-pointer text-md leading-5 my-1"
                onClick={handleSeren}
              >
                ou relevé SIREN
              </li>
              <li
                className="text-green-600 cursor-pointer text-md leading-5 my-1"
                onClick={handleKrcibs}
              >
                Exemple d'extrait KBIS
              </li>
              <li
                className="text-green-600 cursor-pointer text-md leading-5 my-1"
                onClick={handleSeren}
              >
                Exemple de relevé SIRENE
              </li>
            </ul>
            <div className="my-2 flex flex-col space-y-3">
              <p className="">
                (1) Uniquement pour les chauffeurs indépendants
              </p>
              <p className="">
                (2) Si vous êtes déjà partenaire chauffeur et que vous souhaitez
              </p>
              <p>
                effectuer un changement de statut, veuillez nous transmettre
                votre nouveau KBIS sur partenaires@bolt.eu
              </p>
            </div>
            <div className=" mt-2">
              <label
                htmlFor="file-upload"
                className="text-md font-bold py-3 px-4 rounded-xl bg-green-600 text-white justify-center items-center flex max-w-[50%] md:max-w-[20%]"
              >
                <BiUpload size={20} className="text-white mr-2" /> Upload file
              </label>
              <input id="file-upload" type="file" className="hidden" />
            </div>
          </div>
          <div className="doc__box py-4 px-2 rounded-lg md:px-8">
            <h4 className="text-lg font-bold mt-2">Registre VTC</h4>
            <p className="text-sm font-bold text-red-600 leading-5 mt-3">
              Obligatoire *
            </p>
            <p className="font-bold text-sm">
              Uniquement pour les chauffeurs indépendants
            </p>
            <div className="">
              <p className="font-bold text-md mt-4">Expire le </p>
              <div className="">
                <p className="text-sm font-light bg-gray-200 p-2 text-center my-2">
                  Année
                </p>
                <p className="text-sm font-light bg-gray-200 p-2 text-center my-2">
                  Mois
                </p>
                <p className="text-sm font-light bg-gray-200 p-2 text-center my-2">
                  Jour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggle ? (
        <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-40 flex items-center justify-center">
          <AiOutlineCloseCircle
            size={35}
            className="absolute top-5 right-10 text-white z-50 cursor-pointer"
            onClick={() => setToggle(false)}
          />
          <div className="py">
            <img src={modalImage} alt="modal image" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Mydocument;
