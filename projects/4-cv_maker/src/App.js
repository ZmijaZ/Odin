
import {Form} from './components/Form.js'
import { JobForm } from './components/Job.js';
import {PersonalForm} from './components/Personal.js'
import {ContactForm} from './components/Contact'
import {School, SchoolForm} from './components/School.js'
import { SkillForm } from './components/Skill.js';
import { StrengthForm } from './components/Strength.js';

function App() {
  return (
    <div className="App">

      <PersonalForm></PersonalForm>
      <ContactForm></ContactForm>
      <SchoolForm></SchoolForm>
      <JobForm></JobForm>
      <SkillForm></SkillForm>
      <StrengthForm></StrengthForm>

      {/* <Personal></Personal> */}
    </div>
  );
}

export default App;
