import logo from "../../assets/favicon.ico";
import "../Registration/form.css";

import { useHook } from "./hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    gender,
    setGender,
    setYearGraduated,
    showFormFirst,
    employment_status,
    setemploymentstatus,
    jobDuration,
    setJobDuration,
    employment_type,
    setemployment_type,
    furtherStudies,
    setFurtherStudies,
    enrollFurtherStudies,
    setEnrollFurtherStudies,
    otherEnrollDescription,
    setOtherEnrollDescription,
    eligibility,
    seteligibility,
    otherEligibilityDescription,
    setOtherEligibilityDescription,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    currentAddress,
    setCurrentAddress,
    dateOfBirth,
    setDateOfBirth,
    handleEmailChange,
    handleMobileNumberChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleNextButtonClick,
    handleBackButtonClick,
    mobileNumber,
    yearGraduated,
    email,
    isEmailValid,
    password,
    isPasswordValid,
    confirmPassword,
    handleImageChange,
    handleRegister,
    position_current_job,
    year_current_job,
    place_current_job,
    setposition_current_job,
    setplace_current_job,
    setyear_current_job,
    setcurrent_job,
    current_job,
    setEligibilityAcquired,
    setOtherEligibilityAcquired,
    handleOTP,
    otp,
    setOtp,
  } = useHook();

  return (
    <div className="min-h-screen flex flex-col items-center mx-auto bg-green-100">
      <div className="flex items-center mt-4">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-black font-mono text-2xl accent-indigo-300">
          Bachelor of Science in Computer Science
        </h1>
      </div>
      <div className="body-container">
        <header>Registration</header>
        <form action="#" onSubmit={handleRegister}>
          {showFormFirst && (
            <div className="form first">
              <div className="details personal">
                <span className="title">Personal Details</span>
                <div className="fields">
                  <div className="input-fields">
                    <label>LastName</label>
                    <input
                      type="text"
                      placeholder="Enter your lastname"
                      required
                      value={lastName} // Restore the value from state
                      onChange={(e) => setLastName(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="input-fields">
                    <label>FirstName</label>
                    <input
                      type="text"
                      placeholder="Enter your firstname"
                      required
                      value={firstName} // Restore the value from state
                      onChange={(e) => setFirstName(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="input-fields">
                    <label>MiddleName</label>
                    <input
                      type="text"
                      placeholder="Enter your middlename"
                      value={middleName} // Restore the value from state
                      onChange={(e) => setMiddleName(e.target.value)} // Update the state when the input changes
                    />
                  </div>

                  <div className="input-fields">
                    <label>Mobile Number </label>
                    <input
                      type="text"
                      placeholder="Enter mobile number"
                      required
                      value={mobileNumber}
                      onChange={handleMobileNumberChange}
                    />
                  </div>
                  <div className="input-fields">
                    <label>Gender</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="input-fields">
                    <label>Current Address</label>
                    <input
                      type="text"
                      placeholder="Brgy.; City/Municipality;Province"
                      required
                      value={currentAddress} // Restore the value from state
                      onChange={(e) => setCurrentAddress(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="input-fields">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      required
                      value={dateOfBirth} // Restore the value from state
                      onChange={(e) => setDateOfBirth(e.target.value)} // Update the state when the input changes
                    />
                  </div>
                  <div className="input-fields">
                    <label>Year Graduated</label>
                    <select
                      value={yearGraduated}
                      onChange={(e) => setYearGraduated(e.target.value)}
                      required
                    >
                      {/* ayaw sa hilabti */}
                      <option value="">Select Year</option>
                      <option value="2014-2015">2014-2015</option>
                      <option value="2015-2016">2015-2016</option>
                      <option value="2016-2017">2016-2017</option>
                      <option value="2017-2018">2017-2018</option>
                      <option value="2018-2019">2018-2019</option>
                      <option value="2019-2020">2019-2020</option>
                      <option value="2020-2021">2020-2021</option>
                      <option value="2021-2022">2021-2022</option>
                      <option value="2022-2023">2022-2023</option>
                    </select>
                  </div>
                  <div className="input-fields">
                    <label>Image</label>
                    <input type="file" xonChange={handleImageChange} required />
                  </div>
                </div>
                <div className="details personal">
                  <span className="title">Login Details</span>
                  <div className="fields">
                    <div className="input-fields">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder="Enter your personal email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className={isEmailValid ? "" : "border-red-500"} // Add border color based on email validation
                      />
                      {!isEmailValid && (
                        <span className="text-red-500 ">
                          Please enter a valid email address (e.g.,
                          example@example.com)
                        </span>
                      )}
                    </div>
                    <div className="input-fields">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={isPasswordValid ? "" : "border-red-500"}
                        required // Add border color based on password validation
                      />
                      {!isPasswordValid && (
                        <span className="text-red-500">
                          Password must contain at least one uppercase letter,
                          one lowercase letter, one special character, and be at
                          least 8 characters long.
                        </span>
                      )}
                    </div>
                    <div className="input-fields">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className={
                          password === confirmPassword ? "" : "border-red-500"
                        }
                        // Add border color if passwords don't match
                      />
                      {password !== confirmPassword && (
                        <span className="text-red-500">
                          Passwords do not match.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button className="nextBtn" onClick={handleNextButtonClick}>
                <span className="btnText">Next</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          )}

          {!showFormFirst && (
            <div className="form second">
              <div className="details personal">
                <span className="title">Employment Status</span>
                <div className="fields">
                  <div className="input-fields">
                    <label>Employment Status</label>
                    <select
                      value={employment_status}
                      onChange={(e) => setemploymentstatus(e.target.value)}
                      required
                    >
                      <option value="Employed">Employed</option>
                      <option value="Unemployed">Unemployed</option>
                    </select>
                  </div>

                  {employment_status === "Employed" && (
                    <>
                      <div className="input-fields">
                        <label>Current Job</label>
                        <input
                          value={current_job}
                          onChange={(e) => setcurrent_job(e.target.value)}
                          type="text"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>Year(s) in Current Job</label>
                        <input
                          value={year_current_job}
                          onChange={(e) => setyear_current_job(e.target.value)}
                          type="number"
                          placeholder=""
                          required
                        />
                      </div>
                      {/* <div className="input-fields">
                        <label>
                          How long did you land a job after graduation?
                        </label>
                        <select
                          value={jobDuration}
                          onChange={(e) => setJobDuration(e.target.value)}
                          required
                        >
                          <option value="">Select Duration</option>
                          <option value="0-6 months">0-6 months</option>
                          <option value="6 months - 1 year">
                            6 months - 1 year
                          </option>
                          <option value="1 year - 2 years">
                            1 year - 2 years
                          </option>
                          <option value="2 years above">2 years above</option>
                        </select>
                      </div> */}
                      <div className="input-fields">
                        <label>Position in Current Job</label>
                        <input
                          value={position_current_job}
                          onChange={(e) => {
                            setposition_current_job(e.target.value);
                          }}
                          type="text"
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>Employment Type</label>
                        <select
                          value={employment_type}
                          onChange={(e) => setemployment_type(e.target.value)}
                          required
                        >
                          <option value="">Select Employment Type</option>
                          <option value="Regular">Regular</option>
                          <option value="Casual">Casual</option>
                          <option value="Project">Project</option>
                          <option value="Seasonal">Seasonal</option>
                          <option value="Fixed">Fixed-term</option>
                          <option value="Probationary">Probationary</option>
                        </select>
                      </div>
                      <div className="input-fields">
                        <label>Employer/Place of Current Job </label>
                        <input
                          value={place_current_job}
                          onChange={(e) => {
                            setplace_current_job(e.target.value);
                          }}
                          type="text"
                          required
                        />
                      </div>
                      <div className="input-fields">
                        <label>Engage in further Studies?</label>
                        <select
                          value={furtherStudies}
                          onChange={(e) => {
                            setFurtherStudies(e.target.value);
                          }}
                          required
                        >
                          <option value="YES">YES</option>
                          <option value="NO">NO</option>
                        </select>
                      </div>

                      <div className="input-fields">
                        <label>Enroll Further Studies?</label>
                        <select
                          value={enrollFurtherStudies}
                          onChange={(e) => {
                            setEnrollFurtherStudies(e.target.value);
                            if (e.target.value !== "Other") {
                              setOtherEnrollDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                          // Add the disabled attribute based on the state
                        >
                          <option value="With Doctoral Units">
                            With Doctoral Units
                          </option>
                          <option value="MA/MS Graduate">MA/MS Graduate</option>
                          <option value="With MA/MS Units">
                            With MA/MS Units
                          </option>
                          <option value="Other Baccalaureate Course">
                            Other Baccalaureate Course
                          </option>
                          <option value="None">None</option>
                          <option value="Other">Other</option>
                        </select>
                        {enrollFurtherStudies === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            value={otherEnrollDescription}
                            onChange={(e) =>
                              setOtherEnrollDescription(e.target.value)
                            }
                            required
                          />
                        )}
                      </div>

                      <div className="input-fields">
                        <label>Eligibility Acquired (if any)</label>
                        <select
                          value={eligibility}
                          onChange={(e) => {
                            seteligibility(e.target.value);
                            if (e.target.value !== "Other") {
                              setOtherEligibilityDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                        >
                          <option value="Bar and Board Examination Eligibility">
                            Bar and Board Examination Eligibility
                          </option>
                          <option value="Pilot Eligibility for Military Aviators">
                            Pilot Eligibility for Military Aviators
                          </option>
                          <option value="National Service Training Eligibility">
                            National Service Training Eligibility
                          </option>
                          <option value="Philippine National Police (PNP) Entrance Eligibility">
                            Philippine National Police (PNP) Entrance
                            Eligibility
                          </option>
                          <option value="Barangay Health Workers Eligibility">
                            Barangay Health Workers Eligibility
                          </option>
                          <option value="Career Service Professional Eligibility">
                            Career Service Professional
                          </option>
                          <option value="Sub-Professional Eligibility">
                            Career Service Sub Professional
                          </option>
                          <option value="Honor Graduate Eligibility">
                            Honor Graduate Eligibility
                          </option>
                          <option value="Industrial Safety and Health Eligibility">
                            Industrial Safety and Health Eligibility
                          </option>
                          <option value="Philippine Veterans Affairs Office (PVAO) Eligibility">
                            Philippine Veterans Affairs Office (PVAO)
                            Eligibility
                          </option>
                          <option value="Fire Officer Eligibility">
                            Fire Officer Eligibility
                          </option>
                          <option value="Licensed Professional Teacher Eligibility">
                            Licensed Professional Teacher Eligibility
                          </option>
                          <option value="None">None</option>
                          <option value="Other">Other</option>
                        </select>
                        {eligibility === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            value={otherEligibilityDescription}
                            onChange={(e) =>
                              setOtherEligibilityDescription(e.target.value)
                            }
                            required
                          />
                        )}
                      </div>
                    </>
                  )}

{employment_status === "Unemployed" && (
                    <>
                      <div className="input-fields">
                        <label>Engage in further Studies?</label>
                        <select
                          onChange={(e) => {
                            setFurtherStudies(e.target.value);
                          }}
                          required
                        >
                          <option value="YES">YES</option>
                          <option value="NO">NO</option>
                        </select>
                      </div>
                      <div className="input-fields">
                        <label>Enroll Further Studies?</label>
                        <select
                          value={enrollFurtherStudies}
                          onChange={(e) => {
                            setEnrollFurtherStudies(e.target.value);
                            if (e.target.value !== "Other") {
                              setOtherEnrollDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                        >
                          <option value="With Doctoral Units">
                            With Doctoral Units
                          </option>
                          <option value="MA/MS Graduate">MA/MS Graduate</option>
                          <option value="With MA/MS Units">
                            With MA/MS Units
                          </option>
                          <option value="Other Baccalaureate Course">
                            Other Baccalaureate Course
                          </option>
                          <option value="Not Applicable">Not Applicable</option>
                          <option value="Other">Other</option>
                        </select>
                        {enrollFurtherStudies === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            value={otherEnrollDescription}
                            onChange={(e) =>
                              setOtherEnrollDescription(e.target.value)
                            }
                            required
                          />
                        )}
                      </div>
                      <div className="input-fields">
                        <label>Eligibility Acquired (if any)</label>
                        <select
                          value={eligibility}
                          onChange={(e) => {
                            seteligibility(e.target.value);
                            if (e.target.value !== "Other") {
                              setOtherEligibilityDescription(""); // Clear custom input if not "Other"
                            }
                          }}
                          required
                        >
                          <option value="Bar and Board Examination Eligibility">
                            Bar and Board Examination Eligibility
                          </option>
                          <option value="Pilot Eligibility for Military Aviators">
                            Pilot Eligibility for Military Aviators
                          </option>
                          <option value="National Service Training Eligibility">
                            National Service Training Eligibility
                          </option>
                          <option value="Philippine National Police (PNP) Entrance Eligibility">
                            Philippine National Police (PNP) Entrance
                            Eligibility
                          </option>
                          <option value="Barangay Health Workers Eligibility">
                            Barangay Health Workers Eligibility
                          </option>
                          <option value="Career Service Professional and Sub-Professional Eligibility">
                            Career Service Professional
                            Eligibility
                          </option>
                          <option value="Career Service Professional and Sub-Professional Eligibility">
                            Career Service Sub-Professional
                            Eligibility
                          </option>
                          <option value="Honor Graduate Eligibility">
                            Honor Graduate Eligibility
                          </option>
                          <option value="Industrial Safety and Health Eligibility">
                            Industrial Safety and Health Eligibility
                          </option>
                          <option value="Philippine Veterans Affairs Office (PVAO) Eligibility">
                            Philippine Veterans Affairs Office (PVAO)
                            Eligibility
                          </option>
                          <option value="Fire Officer Eligibility">
                            Fire Officer Eligibility
                          </option>
                          <option value="Licensed Professional Teacher Eligibility">
                            Licensed Professional Teacher Eligibility
                          </option>
                          <option value="Not Applicable">Not Applicable</option>
                          <option value="Other">Other</option>
                        </select>
                        {eligibility === "Other" && (
                          <input
                            type="text"
                            placeholder="Please specify"
                            value={otherEligibilityDescription}
                            onChange={(e) =>
                              setOtherEligibilityDescription(e.target.value)
                            }
                            required
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>

                <div className="buttons">
                  <div className="backBtn" onClick={handleBackButtonClick}>
                    <i className="uil uil-navigator"></i>
                    <span className="btnText">Back</span>
                  </div>

                  <button className="nextBtn" onClick={handleOTP}>
                    <span className="btnText">Proceed</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {!showFormFirst && (
            <div className="form third">
              <div className="details personal">
                <span className="title">OTP</span>
                <div className="fields">
                  <>
                    <div className="input-fields">
                      <label>OTP</label>
                      <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="number"
                        placeholder=""
                      />
                    </div>
                  </>
                </div>

                <div className="buttons">
                  <button className="nextBtn" onClick={handleRegister}
                  >
                    <span className="btnText">Register</span>
                  </button>
                </div>
                <Link to="/Login">
                  <p
                    className="proceed-text"
                    style={{
                      fontSize: "14px", // Adjust the font size as needed
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Proceed to login?
                  </p>
                </Link>
              </div>
            </div>
          )}
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Registration;
