import React from "react";

export default function Overview(props) {
  return (
    <div>
      <div className="clearfix">
        <img
          src={props.image}
          className="col-md-6 float-md-end img-responsive img-thumbnail"
          alt="restaurant image"
        />

        <p>
          A paragraph of placeholder text. We're using it here to show the use
          of the clearfix className. We're adding quite a few meaningless
          phrases here to demonstrate how the columns interact here with the
          floated image.
        </p>

        <p>
          As you can see the paragraphs gracefully wrap around the floated
          image. Now imagine how this would look with some actual content in
          here, rather than just this boring placeholder text that goes on and
          on, but actually conveys no tangible information at. It simply takes
          up space and should not really be read.
        </p>

        <p>
          And yet, here you are, still persevering in reading this placeholder
          text, hoping for some more insights, or some hidden easter egg of
          content. A joke, perhaps. Unfortunately, there's none of that here.
        </p>
      </div>
    </div>
  );
}
