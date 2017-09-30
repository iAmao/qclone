import { Column } from 're-bulma';
import _ from 'lodash';
import Answer from './answer';
import Question from './question';

export default function ActiveFeed(props) {
  return (
    <Column>
      <h3 style={{ marginTop: 0 }}>{_.upperFirst(props.activeFeed)}</h3>
      <hr />
      <div className="profile-active-feed">
        {props.activeFeed === 'answers' && <Answer
          answers={props.answers}
          profile_photo={props.profile_photo}/>}
        {props.activeFeed === 'questions' && <Question
          questions={props.questions}
          profile_photo={props.profile_photo}/>}
      </div>
    </Column>
  );
}
