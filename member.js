function skillsMember() {
  // This is a private variable
  var skills = ['HTML', 'CSS', 'JS', 'React'];

  // This is a public function
  function getSkills() {
    return skills;
  }

  // This is a public function
  function addSkill(skill) {
    skills.push(skill);
  }

  return {
    getSkills: getSkills,
    addSkill: addSkill
  };
}