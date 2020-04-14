import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
// import ReactDOM from "react-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// import classnames from "classnames";
// import CustomTabs from "../../../components/tabs/customTabs";
// import ContentHeader from "../../../components/contentHead/contentHeader";
// import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
// import ButtonsDefault from "./examples/buttonsDefault";
// import ButtonsIcon from "./examples/buttonsIcon";
// import ButtonsSquare from "./examples/buttonsSquare";
// import ButtonsRound from "./examples/buttonsRound";
// import ButtonsSizing from "./examples/buttonsSizing";
import ButtonsGradient from "./examples/buttonsGradient";
// import ButtonsGroup from "./examples/buttonsGroup";
import ButtonsDropdown from "./examples/buttonsDropdown";
import ButtonsRadio from "./examples/buttonRadio";
// import ButtonsCheckbox from "./examples/buttonsCheckbox";

// Import Example Source Code
// import ButtonsDefaultSource from "./exampleSource/buttonsDefault";
import ButtonsIconSource from "./exampleSource/buttonsIcon";
// import ButtonsSquareSource from "./exampleSource/buttonsSquare";
// import ButtonsRoundSource from "./exampleSource/buttonsRound";
// import ButtonsSizingSource from "./exampleSource/buttonsSizing";
import ButtonsGradientSource from "./exampleSource/buttonsGradient";
// import ButtonsGroupSource from "./exampleSource/buttonsGroup";
import ButtonsDropdownSource from "./exampleSource/buttonsDropdown";
import ButtonsRadioSource from "./exampleSource/buttonRadio";
// import ButtonsCheckboxSource from "./exampleSource/buttonsCheckbox";
import { Button } from "reactstrap";
import {
  Settings,
  Info,
  ThumbsUp,
  AlertOctagon,
  AlertTriangle
} from "react-feather";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

class buttons extends Component {
  state = {
    value: "",
    copied: false
  };
  render() {
    return (
      <Fragment>
        <Row className="row-eq-height">
          <Col sm="12">
            <Card>
              <CardBody>
                <LiveProvider
                  code={ButtonsIconSource}
                  scope={{
                    Button,
                    Settings,
                    Info,
                    ThumbsUp,
                    AlertOctagon,
                    AlertTriangle
                  }}
                >
                  <LiveError />

                  <CardTitle>Button Design</CardTitle>

                  <Col md="12" lg="6" className="leftDiv">
                    {/* <ButtonsIcon /> */}
                    <LivePreview />
                    <div className="">
                      <div className="installation">Installation</div>

                      <Col md="12" className="leftDiv">
                        <div className="installation-steps">
                          <div className="installation-text">
                            Download and install the package. Use Node.js v8.0.0
                            or later.
                          </div>
                          <div className="installation-box">
                            npm install --save reactstrap react react-dom
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md="12" lg="6" className="rightDiv">
                    <CopyToClipboard
                      text={ButtonsIconSource}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <span className="copy-code">Copy Code</span>
                    </CopyToClipboard>
                    {/* <PrismCode component="pre" className="language-javascript">
                    {ButtonsIconSource}
                  </PrismCode> */}

                    <LiveEditor style={{ background: "#272822" }} />
                  </Col>
                </LiveProvider>
              </CardBody>
            </Card>
          </Col>

          <Col sm="12">
            <Card>
              <CardBody>
                <CardTitle>Button Gradient Design</CardTitle>

                <Col md="12" lg="6" className="leftDiv">
                  <ButtonsGradient />
                  <div className="">
                    <div className="installation">Installation</div>

                    <Col md="12" className="leftDiv">
                      <div className="installation-steps">
                        <div className="installation-text">
                          Download and install the package. Use Node.js v8.0.0
                          or later.
                        </div>
                        <div className="installation-box">
                          npm install --save reactstrap react react-dom
                        </div>
                      </div>
                    </Col>
                  </div>
                </Col>
                <Col md="12" lg="6" className="rightDiv">
                  <CopyToClipboard
                    text={ButtonsGradientSource}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <span className="copy-code">Copy Code</span>
                  </CopyToClipboard>
                  <PrismCode component="pre" className="language-javascript">
                    {ButtonsGradientSource}
                  </PrismCode>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardBody>
                <CardTitle>Radio Button Design</CardTitle>

                <Col md="12" lg="6" className="leftDiv">
                  <ButtonsRadio />
                  <div className="">
                    <div className="installation">Installation</div>

                    <Col md="12" className="leftDiv">
                      <div className="installation-steps">
                        <div className="installation-text">
                          Download and install the package. Use Node.js v8.0.0
                          or later.
                        </div>
                        <div className="installation-box">
                          npm install --save reactstrap react react-dom
                        </div>
                      </div>
                    </Col>
                  </div>
                </Col>
                <Col md="12" lg="6" className="rightDiv">
                  <CopyToClipboard
                    text={ButtonsRadioSource}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <span className="copy-code">Copy Code</span>
                  </CopyToClipboard>
                  <PrismCode component="pre" className="language-javascript">
                    {ButtonsRadioSource}
                  </PrismCode>
                </Col>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardBody>
                <CardTitle>Dropdown Button Design</CardTitle>

                <Col md="12" lg="6" className="leftDiv">
                  <ButtonsDropdown />
                  <div className="">
                    <div className="installation">Installation</div>

                    <Col md="12" className="leftDiv">
                      <div className="installation-steps">
                        <div className="installation-text">
                          Download and install the package. Use Node.js v8.0.0
                          or later.
                        </div>
                        <div className="installation-box">
                          npm install --save reactstrap react react-dom
                        </div>
                      </div>
                    </Col>
                  </div>
                </Col>
                <Col md="12" lg="6" className="rightDiv">
                  <CopyToClipboard
                    text={ButtonsDropdownSource}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <span className="copy-code">Copy Code</span>
                  </CopyToClipboard>
                  <PrismCode component="pre" className="language-javascript">
                    {ButtonsDropdownSource}
                  </PrismCode>
                </Col>
              </CardBody>
            </Card>
          </Col>

          {/* 



            <Row className="row-eq-height">
              

               <Col lg="12" xl="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Checkbox Buttons</CardTitle>
                        <CustomTabs
                           TabContent1={<ButtonsCheckbox />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ButtonsCheckboxSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

              

               */}
        </Row>
      </Fragment>
    );
  }
}

export default buttons;
