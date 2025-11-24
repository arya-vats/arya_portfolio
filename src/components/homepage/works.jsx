import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://moneyeu.com/assets/frontend_assets/zest/img/money-eu.webp"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Money EU</div>
							<div className="work-subtitle">
								Senior Software Developer (FullStack)
							</div>
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/D560BAQHK_qe5RlyULg/company-logo_200_200/company-logo_200_200/0/1683639978515/visdum_logo?e=2147483647&v=beta&t=d6YBr74vp-UJ711up7mtfNKOIgjZgKxrUfLyZt7RkZM"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Visdum Tech</div>
							<div className="work-subtitle">
								SDE-1
							</div>
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/D4D0BAQHzzZ_3f0BiHw/company-logo_200_200/0/1697916403740/flavum_healthtech_logo?e=2147483647&v=beta&t=CMGNq4SnnqMFLcLFCvsyP2xRQNpnfqbutk56JyUwfLc"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Flavum Healthtech</div>
							<div className="work-subtitle">
								FullStack Developer, Team Lead
							</div>
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C4E0BAQEvim2LHSDodA/company-logo_200_200/0/1622073412911?e=2147483647&v=beta&t=Wpg0kpQ0RNnKydogN7v15XJyhUvFYw3gfA28VjeGvz8"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">
								Prosperix-Crowdstaffing
							</div>
							<div className="work-subtitle">
								Junior Software Engineer
							</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C4E0BAQEvim2LHSDodA/company-logo_200_200/0/1622073412911?e=2147483647&v=beta&t=Wpg0kpQ0RNnKydogN7v15XJyhUvFYw3gfA28VjeGvz8"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Prosperix-Crowdstaffing
							</div>
							<div className="work-subtitle">
								Software Development-Intern
							</div>
						</div>
						<div className="work">
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAflBMVEX///8AAACgoKDKysri4uJ5eXns7Ow7Oztra2s9PT2wsLD7+/v19fUbGxtAQECGhobT09O/v79FRUVLS0vb29s1NTXv7+8wMDBaWlomJiYrKysxMTFPT09iYmKOjo5zc3OWlpaoqKi3t7fExMR4eHgQEBCDg4MXFxeSkpJeXl7xLkwbAAAICUlEQVR4nO2bi3aqOhCGuUkIYORaAbmqtfr+L3hIwiVA7N5dW7Q9na9riSQIyc9kMhmoogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8OuxNc95dRu+CWYWoODt1a14PcweUHgALTwrpBrsEdFe3ZRX4xwC5LXbjyABf1ET4rebPaaKmO6rm/Nk3jZJLexaqGk/0037YZLk94hh0A8NBzexMC/bj4vZflgBKV/RrFdwzah/dEhwEUtds/uiIbxvnt+ql+DHOfMKdiztsYEr+9cMkTxs/9rZwsl/y92/T4NwyIZHZP7x2P8/J4scjvPCY1nav1Kc6DoPLzcxRghrvznSMk0nOlvWsUGBZlsEJb/LNJyxu0axjw9qijAmhA4aL8c4empjShIbT73gFIucj3zSdMOAxKpaeX5CyImWOBYOnti2CKuq+kotwjCMt3TxoRxRG2zvYuojtPjG9bHQ4UmWYdi5qr5YiyIOdjrzkVdkt1Nszr6fMouJ4VgkXzuDYdvaOUzVjldqYQ5pvGbfrjuizGM7UZwwDZyEFHRraNpaflSd8EotBpzLIVUcG3PDUDzEl6cmxtfWTlQVo5Vi8a9r4fmctXRzkvf37FKlYVx1F4yZQSgnhHUzVUtr1eWqsf+CFlV37FpJNw2FdoVQpNgpdxWKt+cr1xonu7RqvTxZ0343X9Bis7IWYSuDUtHe+yk3CMXfsuWakwQBTXNd0OWT3/8r9TfSItu3fqKmiSxF31rcZ1wznW6iOCetUCZKVzQM7RtpgZFJkxhMBP+9s4AiYMOlJpiKUqJipYsr30uLM26jCzO22U6j8mSG8cFEcUNaqbwFTJJ1+E5anBCdTEvEo4jrOwvCW0fKen9EZ7pp0G21let30kIp6HMhN7e6vYyLUgRsc4vprpMje63L39XCOZ5zEhaNEOpJtDC0IghyS5NIGdWt8092EpPWLzkJbtpylXENiKdECeJRhIkTtvUObLR4WU03Pg7+vndf444W7mWIwm5DmxdaeOFwVHyansA/DFX1xKgdbajI/OlvbBQQYgS3KuO3Xk+5KDvuPi8xC8kLtFp8I9VC36oC/bXnWpTiQWol/N65iTViQiDaizXFRKYQN1FA0wdap1KZspWJ8c7yf0bMpPFwuFIkLtXiqE7ppreZFtbsqGT4/Vs2qxpMy5tViAuMt5jQDof0Sin7RbsqY2JFfJ1a71mptZZhyLTQ1Tk1K59qsVscNcSE4aKqO72xqAjHy77F1BM01GM6BWHd9w5XoV1uwIKLUxauM5VItHC3ixbzGzvRYinYcPu1ZU3X5XxZI3Q2prOpuacDwuiWZ/UkzjymbOwEaOac1tOiXDaY92WixXwYUPhk6EpqVDbiZfqpY56mInTCqNhY81XuP+uJb9gww2iw6JtW1ULWYHbLRS2k3eL9smU1hNbMPQyjHi58ZJOozlcgm0wW8rALGJis4j2XWoy9bCK9EFssajF6C6sZJw3Wi+E3Gy8abYx6gfd+RxPOTIYruzmiJ7ixm++G1r02Own2nqNF0zeSjX6trDX76Ptzu8D9UeyhsKiY048eZsi+IFPUf2ejvs+GvI+DRMO0/17KBtQpvRtgluvEnkst+h7ni2NFLfpEac1q+olj135/m2ip9I7YFiyOVZj93nhpN2CGcYnZnoXupXyPaPeP3Zay1KK/XxvhKMehs5ighdN3kXv0fijQJg595GO6N6BmDFu4ys5SCxp5tp9vqKY7xt2XLk7rpHSWWvSegE+D0a1I8gCl1KvJ7II/Ee4zQqIWW65F32N7HErcEQxhl6CFk7PxYx9YmXdvwRjhu77kX1hqMQSdbFTnQvtFLVD3nS+U5FpQE++tjPqLUYvWytzerXyII+GIWConF41yydO0GDycuov0pP9OzVU6j4Qnozb6s0y0ULZV2UvGRsyghaPuxrXf1C8V7Epe+mnGRn/WGFGGmU+E1otanMTKSK6FuAyjPRa0EJguLvQtc5ybRPmElXznte/OWNRIpGAv2E3izlSo/Qst6H2WazFbW1js9Ib81a2OlebUPhQU34qJl1ows5lo4Qu1f9aChU9SLeZ99lSWrag/CS1XirXMfkCIozZS59SsfLpOPX9BCz6nyLRYprUrTM/vovuPyDz06NSWaZpGMy5JE78t6Ox1vtiQ5y+GKPrPWvBEoUQLiVvwMKGHH7d37/0OP/pR4uLmq900StszWbbXXek8rzXMBX/QAnc506UW0vVmRdiMWt1LX5kIPfqBkUyL0WuUw2ySDG61jxXqvqDPd0Z9fEENaNSCu9ePYaKYa4HkE6eJEb0nLroTRFT44bOILkEIe9xTaSXF2RZzld1RQpFhb4qkMM2uhso2aOHsisQq9XGeGGMtq7hZ2t0xYPPXkrxMGkXUh/DH/HPNLAYXmMbgn1Bh9kDIzyR+oUHZKgv2VXiAFk6O2aNlPz3PTuLs4hUfIj6cB2ihGAFib2B4cTgxAi/B8wcx35pHaKEYIQqp83E3WdWr4egVRslz3/b8Rx6iheJaCF/pXBxt9nmpNZq2CxEKf9g/EjxGi9ZJxinaHFsz8CoSEIxQnPy4fyOZ5bUEmq7iL18nebu2lpBuEQ4CnJe2/gNfDHe8jkWN2VX89ZB3T3WVhNam1n+aQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAGvwH4cxm9fAdofsAAAAASUVORK5CYII="
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">OneClapp</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
