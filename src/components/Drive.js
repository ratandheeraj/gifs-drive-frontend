import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cuid from "cuid";

import Dropzone from "./DropZone";
import ImageGrid from "./ImageGrid";

const baseURL = "http://localhost:8000/api/v1/gifs";

function Drive() {
  const navigate = useNavigate();
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
	var cuid = require('cuid');
    const token = localStorage.getItem("toptal");
    if (!token) {
      navigate("/");
    }

    let reqInstance = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("toptal")}`,
      },
    });

    reqInstance.get(baseURL).then((response) => {
      if (response.status == "200") {
        console.log("success");
        console.log(response);
      } else {
        console.log(response);
        alert("Error");
      }
    });
  });


  // drop images
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <div>
      <div>
        <div class="container my-6 mx-auto">
          <input
            placeholder="Search your GIFs by name or tags..."
            class="py-4 px-4 w-full drop-shadow-sm rounded-md outline-blue-100"
          />
        </div>

        <main class="container my-8 mx-auto flex justify-center">
          <div class="w-full xl:w-2/3">
            <div class="py-4 px-4 my-4 bg-white rounded-md drop-shadow-sm flex flex-wrap items-center gap-4">
              <div class="flex flex-col items-center gap-1">
                <div
                  class="w-40 h-40 border border-slate-100 rounded-md flex items-center justify-center"
                  data-modal="gif-modal"
                >
                  <img src="assets/demo-gif.gif" alt="demo gif" />
                </div>
                <div>
                  <h3 class="font-medium">demo-gif-1.gif</h3>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
	  <div className="container drop-zone">
	  <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ImageGrid images={images} />
	  
      </div>
    </div>
  );
}

export default Drive;
