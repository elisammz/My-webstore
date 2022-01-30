import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createProduct } from "../api/mutations.js";
import config from "../aws-exports";
import "bootstrap/dist/css/bootstrap.min.css";

// Components

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const Admin = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!productDetails.title || !productDetails.price) return;
      await API.graphql(
        graphqlOperation(createProduct, { input: productDetails })
      );
      setProductDetails({
        title: "",
        description: "",
        image: "",
        author: "",
        price: "",
      });
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access level.
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });

      const image = await Storage.get(key, { level: "public" });
      setImage(image);
      setProductDetails({ ...productDetails, image: url });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="admin-container text-primary">
      <AmplifyAuthenticator>
        <div>
          <header className="admin-header">
            <h3>Add New Product in this page as Admin user</h3>
          </header>
          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="add-product-image">
              {image ? (
                <img className="image-preview" src={image} alt="" />
              ) : (
                <input
                  type="file"
                  accept="image/jpg"
                  onChange={(e) => handleImageUpload(e)}
                />
              )}
            </div>
            <div className="admin-form-fields">
              <div className="title-form">
                <p>
                  <label htmlFor="title">Title</label>
                </p>

                <p>
                  {" "}
                  <input
                    name="email"
                    type="title"
                    placeholder="Type the title"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        title: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="description-form">
                <p>
                  <label htmlFor="description">Description</label>
                </p>
                <p>
                  <textarea
                    name="description"
                    type="text"
                    rows="5"
                    placeholder="Type the description of the product"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="price-form">
                <p>
                  <label htmlFor="price">Price in USD ($)</label>
                  <input
                    name="price"
                    type="text"
                    placeholder="What is its price (USD)"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        price: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div className="featured-form">
                <p>
                  <label>Do you want this product to be featured?</label>
                  <input
                    type="checkbox"
                    className="featured-checkbox"
                    checked={productDetails.featured}
                    onChange={() =>
                      setProductDetails({
                        ...productDetails,
                        featured: !productDetails.featured,
                      })
                    }
                  />
                </p>
              </div>
              <div className="submit-form">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <AmplifySignOut></AmplifySignOut>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Admin;
