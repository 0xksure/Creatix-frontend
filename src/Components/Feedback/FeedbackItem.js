function FeedbackItem({ feedback }) {
  const userID = useSelector(state => state.Auth.UserID);
  const dispatch = useDispatch();
  const numberOfClaps = feedback.claps.length;
  const createdDate = beautifulDiffDate(
    new Date(),
    new Date(feedback.CreatedAt)
  );

  const userHasClapped = feedback.claps.some(clap => clap.UserId == userID);
  return (
    <li key={feedback.ID} className="feedback-item">
      <div className="grid-x grid-margin-x">
        <div className="cell small-3">
          <p>{`${feedback.person.firstname} ${feedback.person.lastname} `}</p>
        </div>
        <div className="cell small-9">
          <div className="grid-x">
            <div lassName="cell small-12">
              <p className="p bold-font medium margin-bottom-s">
                {feedback.title}
              </p>
            </div>
            <div className="cell small-12 margin-bottom-m">
              <p className="p margin-zero">{feedback.description}</p>
            </div>
            <div className="cell small-12">
              <div className="grid-x align-rigth">
                <div className="cell small-6">
                  <div className="grid-x">
                    <ClapAnimation
                      clapFeedback={() => dispatch(clapFeedback(feedback.id))}
                      isClapped={userHasClapped}
                    >
                      <Clap width="20" height="20" />
                    </ClapAnimation>
                    <div>{numberOfClaps}</div>
                  </div>
                </div>
                <div className="cell small-6">
                  <div className="grid-x ">
                    <CommentAnimation
                      commentFeedback={() =>
                        dispatch(clapFeedback(feedback.id))
                      }
                      isCommented={userHasClapped}
                    >
                      <Comment width="20" height="20" />
                    </CommentAnimation>
                    <div>{numberOfClaps}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
