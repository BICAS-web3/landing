import cn from "classnames";
import { FC, useCallback, useEffect, useRef } from "react";

import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";

import s from "./Roadmap.module.scss";

export interface RoadmapProps {}

export const Roadmap: FC<RoadmapProps> = (props) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // const scrollHandler = useCallback(() => {
  // 	const { current: mapCurrent } = mapRef;
  // 	const { current: innerCurrent } = innerRef;

  // 	if (!mapCurrent || !innerCurrent) {
  // 		return;
  // 	}

  // 	const mapRect = mapCurrent.getBoundingClientRect();
  // 	const innerRect = innerCurrent.getBoundingClientRect();
  // 	const scrollPercent = (innerRect.top - 50) / (innerRect.height - mapRect.height);

  // 	mapCurrent.style.transform = `translateX(${(mapRect.width - window.innerWidth) * scrollPercent}px)`;
  // }, []);

  // useEffect(() => {
  // 	if (inView) {
  // 		document.addEventListener('scroll', scrollHandler);
  // 	} else {
  // 		document.removeEventListener('scroll', scrollHandler);
  // 	}

  // 	return () => document.removeEventListener('scroll', scrollHandler);
  // }, [inView]);

  return (
    <Section id="roadmap" title="Roadmap" className={s.section}>
      <div ref={innerRef} className={s._}>
        <div className={s.relativewrapper}>
          <div className={s.track} />
          <div ref={mapRef} className={s.scrollwrapper}>
            <div className={s.progress} />
            <div className={s.grid}>
              <div className={s.spacer} />
              <div className={s.column}>
                <div className={s.placeholder}></div>
                <div className={cn(s.stage, s.stage_bottom, s.stage_checked)}>
                  <span className={s.stage__quarter}>Q2 2023</span>
                  <div className={s.stage__content}>
                    <h4 className={s.stage__title}>MVP</h4>
                    <ul className={s.stage__checklist}>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.11133 7L5.06601 11L14.9527 1"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Marketing research
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.11133 7L5.06601 11L14.9527 1"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Creating a marketing strategy
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.11133 7L5.06601 11L14.9527 1"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Development of a basic online NFT game platform for
                          the earliest launch of the MVP model
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.11133 7L5.06601 11L14.9527 1"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Website design and development
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.11133 7L5.06601 11L14.9527 1"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Invested $200.000 self - funded in product
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={s.column}>
                <div className={cn(s.stage, s.stage_top)}>
                  <span className={s.stage__quarter}>Q3 2023</span>
                  <div className={s.stage__content}>
                    <h4 className={s.stage__title}>CORE</h4>
                    <ul className={s.stage__checklist}>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Expansion of basic Web app capabilities
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Possibility of cross-conversion of currencies
                          (USD-BTC, USD-EUR,ETH-EUR etc.)
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Possibility to create fundraisers on a website
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Integration of the largest NFT marketplaces to expand
                          profile description capabilities.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={s.placeholder}></div>
                </div>
              </div>
              <div className={s.column}>
                <div className={s.placeholder}></div>
                <div className={cn(s.stage, s.stage_bottom)}>
                  <span className={s.stage__quarter}>Q1 2024</span>
                  <div className={s.stage__content}>
                    <h4 className={s.stage__title}>Exctention</h4>
                    <ul className={s.stage__checklist}>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Creating your own internal token
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Token listing on exchanges
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Adding P2E section
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Creating a roadmap of NFT events
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={s.column}>
                <div className={cn(s.stage, s.stage_top)}>
                  <span className={s.stage__quarter}>Q3 2024</span>
                  <div className={s.stage__content}>
                    <h4 className={s.stage__title}>Here we go</h4>
                    <ul className={s.stage__checklist}>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Cross-integration of platform applications with each
                          other
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Fully decentralized platform
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Integration of large third-party applications
                        </span>
                      </li>
                      <li className={s.stage__checkitem}>
                        <span className={s.stage__icon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_267_452)">
                              <path
                                d="M14.1115 5.3335C13.5923 4.14447 12.7375 3.13272 11.6519 2.42224C10.5663 1.71175 9.29699 1.33338 7.99954 1.3335C4.54288 1.3335 1.69954 3.96483 1.36621 7.3335"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.3336 5.33333H14.2669C14.3194 5.33333 14.3714 5.32299 14.42 5.30288C14.4685 5.28278 14.5126 5.25332 14.5497 5.21618C14.5869 5.17903 14.6163 5.13494 14.6365 5.08641C14.6566 5.03788 14.6669 4.98586 14.6669 4.93333V2M1.9209 10.6667C2.95023 13.0213 5.29956 14.6667 8.0329 14.6667C11.4902 14.6667 14.3329 12.0353 14.6669 8.66667"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4.69954 10.6665H1.76621C1.66012 10.6665 1.55838 10.7086 1.48337 10.7837C1.40835 10.8587 1.36621 10.9604 1.36621 11.0665V13.9998"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_267_452">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={s.stage__value}>
                          Creating a platform for NFT game development
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={s.placeholder}></div>
                </div>
              </div>
              <div className={s.spacer} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
