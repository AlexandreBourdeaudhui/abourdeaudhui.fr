/*
 * Package Import
 */
import React from 'react';
import sanitizeHtml from 'sanitize-html';


/*
 * Local Import
 */
import { skills } from 'src/store/datas';


/*
 * Code
 */
const createSanitizeRender = (dirtyHTML) => {
  const html = sanitizeHtml(dirtyHTML, {
    allowedTags: ['a', 'strong'],
    allowedAttributes: {
      a: ['href', 'name', 'target'],
    },
  });

  return { __html: html };
};


/*
 * Component
 */
const Competences = () => (
  <div id="competences">
    {skills.map(skill => (
      <div className="competences" key={skill.id}>
        <img className="competences-illustration" src={skill.image} alt="" />
        <h2 className="competences-title">{skill.title}</h2>
        <p
          className="competences-desc"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={createSanitizeRender(skill.description)}
        />
        {skill.tags.map(tag => (
          <span className="competences-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    ))}
  </div>
);


/*
 * Export
 */
export default Competences;
