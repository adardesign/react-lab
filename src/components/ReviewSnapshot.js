import React, { Component } from 'react';


// stateless Component
function ReviewSnapshot(props) {
  // TODO figure out how u pass props directly 
  return (
  		<div className="hoverTips tipRight" id="pr-snapshot"> <strong>Ratings Distribution</strong>
                    <ul>
                        <li className="pr-histogram-5 Stars"> <span className="pr-histogram-label">5 Stars</span>
                            <div className="pr-ratings-histogram-bar">
                                <div >&nbsp;</div>
                            </div> <span className="pr-histogram-count">(8)</span> </li>
                        <li className="pr-histogram-4 Stars"> <span className="pr-histogram-label">4 Stars</span>
                            <div className="pr-ratings-histogram-bar">
                                <div >&nbsp;</div>
                            </div> <span className="pr-histogram-count">(0)</span> </li>
                        <li className="pr-histogram-3 Stars"> <span className="pr-histogram-label">3 Stars</span>
                            <div className="pr-ratings-histogram-bar">
                                <div >&nbsp;</div>
                            </div> <span className="pr-histogram-count">(0)</span> </li>
                        <li className="pr-histogram-2 Stars"> <span className="pr-histogram-label">2 Stars</span>
                            <div className="pr-ratings-histogram-bar">
                                <div >&nbsp;</div>
                            </div> <span className="pr-histogram-count">(0)</span> </li>
                        <li className="pr-histogram-1 Stars"> <span className="pr-histogram-label">1 Stars</span>
                            <div className="pr-ratings-histogram-bar">
                                <div >&nbsp;</div>
                            </div> <span className="pr-histogram-count">(0)</span> </li>
                    </ul>
                </div>
  )
};

export default ReviewSnapshot;
