import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./instagramFeedAPI.css";
import ComponentBlogReadMore from "./component-read-more";

const InstagramFeed = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchInstagramMedia = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,children{media_url},media_type,media_url,username,timestamp&access_token=${process.env.REACT_APP_TOKEN}`
        );
        const data = await response.json();

        const processedData = [];
        for (const item of data.data) {
          processedData.push(item);
        }

        setMedia(processedData);
      } catch (error) {
        console.error("Error fetching Instagram media:", error);
      }
    };

    fetchInstagramMedia();
  }, []);

  return (
    <>
      <div className="header header-background">
        <div className="header-image-insta">
          <img src="./images/insta-background.jpg" alt="" />
        </div>
        <div className="header-text">
          <h1 className="fw-bold">How to integrate an Instagram feed?</h1>
          <p>
            <Link to="/">Blog</Link> by{" "}
            <a href="https://nchernysheva.com">Natalia Chernysheva</a>
          </p>
          <div className="photo">
            <img src="./images/chernysheva_photo_12.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="main">
        <h4 className="fw-bold my-4">1. On Meta for Developers website </h4>
        <p>
          First, go to{" "}
          <a href="https://developers.facebook.com/">Meta for Developers</a> and
          log in. Once you log in, go to <strong>My Apps</strong> and click{" "}
          <strong>Create App</strong>. Then, select <strong>Other</strong> and
          click Next. On the Select an app type page, select{" "}
          <strong>Consumer</strong> and click Next. On the next page, type an
          app name and click <strong>Create App</strong>.
        </p>
        <p>
          On the Dashboard, go to <strong>App Settings &#8658; Basic</strong>.
          Scroll to the bottom of the page and click{" "}
          <strong>Add Platform</strong>. Select <strong>Website</strong> and
          click Next. Type your website URL in the section{" "}
          <strong>Website</strong> which will appear on your settings page and
          click Save changes.
        </p>
        <p>
          Then, select <strong>Add Product</strong> from the Dashboard menu on
          the left (under App Review and above Activity Log). From the list of
          products, select <strong>Instagram Basic Display</strong> and click
          Set up. On the <strong>Instagram Basic Display &#8658; Basic</strong>{" "}
          settings page, scroll to the bottom and click{" "}
          <strong>Create New App</strong>. In the pop-up window{" "}
          <strong>create a New Instagram App ID</strong>.
        </p>
        <p>
          Then, you will see the Instagam App settings page with the Instagram
          App ID and Instagram App Secret at the top. Scroll down and fill in
          the following fields: <strong>Valid OAuth Redirect URIs</strong>,{" "}
          <strong>Deauthorize callback URL</strong>,{" "}
          <strong>Data Deletion Request URL</strong>. You can use your website
          URL for all three fields. Then, click{" "}
          <strong>Add or remove Instagram Testers</strong> button at the bottom
          of the page.
        </p>
        <p>
          On the <strong>App roles</strong> section, click the{" "}
          <strong>Add People</strong> button, select{" "}
          <strong>Instagram Tester</strong> and add your instagram account login
          you would like to connect. Then, click Add. To verify the connection,
          log in www.instagram.com, go to <strong>Apps and Websites</strong>{" "}
          section of your instagram account and click Allow.
        </p>
        <p>
          Great job! Be patient and keep your Meta for Developers window open,
          we will need some information from it for the next step!
        </p>
        <h4 className="fw-bold my-4">2. In your browser </h4>
        <p>
          {" "}
          Now, once you set up the Meta app and the Instagram app on Meta for
          Developers (yay!), you need to get a token you will use in your code
          to query your instagram media securely. Let's see how!
        </p>
        <p>
          First, let construct the <strong>Authorization Window URL</strong>. Go
          to Meta for Developers App Dashboard &#8658; Products &#8658;
          Instagram &#8658; Basic Display &#8658; Instagram App ID field and
          copy the Instagram App ID.
        </p>
        <pre className="bg-dark text-white w-100">
          <code>
            {`
    https://api.instagram.com/oauth/authorize 
      ?client_id={app-id}  // Your Instagram App ID (for exampe: 123456...)
      &redirect_uri={redirect-uri}  // Your website URL (https://example.com)
      &scope=user_profile,user_media &response_type=code
            `}
          </code>
        </pre>
        <p>
          Open a new browser window and load the Authorization Window URL. It
          should appear and display your Instagram user’s name, the app’s name,
          and a description of the permissions your app is requesting. Log in
          and click Authorize to grant your app access to your profile data.
          Upon success, the page will redirect you to the redirect URI you
          included in the previous step and append an Authorization Code. Don't
          close the window!
        </p>
        <p>
          In your browser address line you will see a long string consisting of
          letters and numbers after your website address and the word "?code=".
          For exampe: https://example.com/auth/?code=AQDp3TtBQQ...#_. This is
          your Authorization code which you will need in the next step. Copy the
          string between the "?code=" and "#_".
        </p>
        <p>Don't give up! You are almost there!</p>
        <h4 className="fw-bold my-4">3. In your Command Line </h4>
        <p>Open your Command Line tool and copy the following POST request:</p>
        <pre className="bg-dark text-white w-100">
          <code>
            {`
    curl -X POST \\
    https://api.instagram.com/oauth/access_token \\
    -F client_id={app-id} \\             // Your Instagram App ID
    -F client_secret={app-secret} \\     // Your Instagram App Secret
    -F grant_type=authorization_code \\    
    -F redirect_uri={redirect-uri} \\     // Your website URL
    -F code={code}                       // Your Authorization Code from the step above
  `}
          </code>
        </pre>
        <p>
          Upon success, the API will return a JSON encoded object containing a
          <strong> short-lived Instagram User Access Token</strong>, valid for 1
          hour, and your Instagram user’s ID. For example:{" "}
          <strong>"access_token": "IGQVJ..."</strong>,{" "}
          <strong>"user_id": 17841405793187218</strong>. You will need the token
          and the user_id to consruct your query in your code - save it!
        </p>
        <h4 className="fw-bold my-4">4. Finally, in your code! </h4>
        <p>
          Congratulations! You made it! You can now go to your code and add the
          query to the Instagram API to fetch media from your instagram feed! I
          am using React so I will show you how to add the query to React.{" "}
        </p>
        <p>
          Each Instagram post has the following fields which you can fetch and
          display on your page: username, id, media_type, media_url, children or
          children{`{media_url}`}, caption. You can find the detailed
          description of the fields here:{" "}
          <a href="https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/">
            link
          </a>
          . The media types are IMAGE, VIDEO, CAROUSEL_ALBUM. My account only
          has single images and albums so I will share with you the code for
          these two media types.
        </p>
        <p>
          To construct your <strong>query</strong>, you should add:
          https://graph.instagram.com/ + your user_id from the step above or you
          can just use "me" + media fields you would like to fetch: id, caption,
          media_type, media_url, children, children
          {`{media_url}`} + your access token{" "}
        </p>
        <p>
          Unless specified otherwise, the query will return only the ids of the
          images inside of the albums (i.e. children). To fetch their
          media_urls, you should add <strong>children{`{media_url}`}</strong> to
          your query. ({" "}
          <a href="https://stackoverflow.com/questions/58732805/instagram-basic-api-is-it-possible-to-get-the-media-url-from-carousel-album-i">
            {" "}
            link{" "}
          </a>
          )
        </p>

        <pre className="bg-dark text-white w-100">
          <code>
            {`
    const response = await fetch(
      \`https://graph.instagram.com/me/media?fields=id,caption,children{media_url},media_type,media_url&access_token={your-access-tocken}\`
    );
    const data = await response.json();
    const processedData = [];
    for (const item of data.data) {
      processedData.push(item);
    }
    setMedia(processedData);       
        `}
          </code>
        </pre>

        <p>
          And finally, you can output the media from your instragram account you
          have fetched on your page! Since the media variable stores data as an
          array, you can simply iterate through the media array to output the
          desired details (for example, image and caption). If some of your
          media are albums (type CAROUSEL_ALBUM), you shoudl add an if-statement
          to check the type of the media and if media is CAROUSEL_ALBUM, you
          should add a nested loop to iterate through the media item's children
          to output each child on the page.{" "}
        </p>

        <pre className="bg-dark text-white w-100">
          <code>{`
    <div className="d-flex bg-dark w-75 m-5 mx-auto overflow-x-scroll slider">
    {media.length > 0 ? (                                   // check if the media variable contains data
      media.map((item) => (                                 // iterate through media array
        <div key={item.id} className="d-flex">
          {item.media_type === "CAROUSEL_ALBUM" ? (         // check if a media element is an album
            <div className="d-flex">
              {item.children.data.map((child, index) => (   // iterate through individual children of the album
                <div key={index} className="m-2">
                  <img
                    width="200"
                    src={child.media_url}
                    alt={item.caption}
                  />
                  <p className="my-2"
                    style={{
                      fontSize: ".8em",
                      color: "rgba(255, 255, 255, .4)",
                    }} 
                    >
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="m-2">                               // if media element is not an album, output it on the page
              <img width="200" src={item.media_url} alt="" />
              <p
                className="my-2"
                style={{
                  fontSize: ".8em",
                  color: "rgba(255, 255, 255, .4)",
                }}
              >
                {item.caption}
              </p>
            </div>
          )}
        </div>
      ))
    ) : (
      <p>Loading...</p> 
    )}
  </div>
        `}</code>
        </pre>

        <h4 className="fw-bold mt-4">Enjoy your Instagram feed! </h4>
      </div>
      <div className="d-flex bg-dark w-75 mt-4 mx-auto overflow-x-scroll slider">
        {media.length > 0 ? (
          media.map((item) => (
            <div key={item.id} className="d-flex">
              {item.media_type === "CAROUSEL_ALBUM" ? (
                <div className="d-flex">
                  {item.children.data.map((child, index) => (
                    <div key={index} className="m-2">
                      <img
                        width="200"
                        src={child.media_url}
                        alt={item.caption}
                      />
                      <p
                        className="my-2"
                        style={{
                          fontSize: ".8em",
                          color: "rgba(255, 255, 255, .4)",
                        }}
                      >
                        {item.caption}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="m-2">
                  <img width="200" src={item.media_url} alt="" />
                  <p
                    className="my-2"
                    style={{
                      fontSize: ".8em",
                      color: "rgba(255, 255, 255, .4)",
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="main">
        <ComponentBlogReadMore />
      </div>
    </>
  );
};

export default InstagramFeed;
