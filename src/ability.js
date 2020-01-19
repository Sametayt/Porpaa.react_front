//ability.js
import { Ability, AbilityBuilder } from '@casl/ability';
// import store from './index';
import store from './createStore';

function defineRulesFor(auth) {
  const { can, rules } = AbilityBuilder.extract();
  if (auth.role === 'admin') {
    can('View', 'Admin-Panel');
    can('View', 'Question-Icons');
    can('View', 'Answers');
    can('View', 'Bookmarks');
    can('View', 'Reports');
    can('View', 'Header-Logo');
    can('View', 'SideBar');
    can('View', 'Header-Toolbar');
    can('Add', 'Answer');
    can('Modify', 'Comment');
    can('Verify', 'Comment');
    can('Reject', 'Comment');
    can('Report', 'Comment');
    can('Normal', 'Comment');
    can('Add', 'CommentToAnswer');
    can('Report', 'CommentToAnswer');
  }
  if (auth.role === 'user') {
    // can('View', 'Question-Icons');
    // can('View', 'Answers');
    // can('View', 'Header-Logo');
    // can('View', 'SideBar');
    // can('Edit', 'Edit Question');
    // can('Edit', 'Edit Answer');
    // can('Add', 'Answer');
    // can('Modify', 'Comment');
    can('View', 'Question-Icons');
    can('View', 'Answers');
    can('View', 'Bookmarks');
    can('View', 'Reports');
    can('View', 'Header-Logo');
    can('View', 'SideBar');
    can('View', 'Header-Toolbar');
    can('Add', 'Answer');
    can('Modify', 'Comment', { author: 'ME' });
    can('Verify', 'Comment');
    can('Reject', 'Comment');
    can('Add', 'CommentToAnswer');
    can('Report', 'CommentToAnswer');
  }
  if (auth.role === 'visitor') {
    can('View', 'Questions');
    can('View', 'Answers');
  }
  return rules;
}

// Defines how to detect object's type
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item;
  }
  return item.__type;
}

const ability = new Ability([], { subjectName });

// let currentAuth;
// currentAuth = { role: 'admin' };
// ability.update(defineRulesFor(currentAuth));

let currentAuth;
console.log(store);

store.subscribe(() => {
  const prevAuth = currentAuth;
  currentAuth = store.getState().app.partials;
  console.log('ABILITY STORE', store.getState().app.partials.role);
  // alert(currentAuth);
  if (prevAuth !== currentAuth) {
    ability.update(defineRulesFor(currentAuth));
  }
});

export default ability;
