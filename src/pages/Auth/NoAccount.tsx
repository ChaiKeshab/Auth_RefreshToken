import { FC } from "react";
import { Button } from "../../components";
import testImg from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";

interface ComponentTypes {
  account?: string;
  label?: string;
  navLink?: string;
}

const NoAccount: FC<ComponentTypes> = ({ account, label, navLink }) => {
  const navigate = useNavigate();

  return (
    <div className=" border-primary flex flex-col p-5 pt-10 w-full md:max-w-[47%] xl:max-w-[40%] lg:p-10">
      <div className="flex flex-wrap items-center w-full justify-start lg:justify-end gap-2">
        <p className="inline-block whitespace-nowrap text-sm">{account}</p>

        <Button
          onClick={() => navigate(`/auth/${navLink}`)}
          className={"lg:mt-0 text-sm border border-primary rounded-full px-6 py-2 bg-button hover:bg-hover"}
          label={label}
        />
      </div>

      <div className="my-32 md:my-0 flex flex-col justify-center items-center h-full">
        <div className="w-full mx-auto">
          <div className=" flex justify-center items-center w-full">
            <hr className="w-full xl:w-1/2 2xl:w-full border" />
            <p className="w-full mx-4 whitespace-nowrap inline-block text-center text-base">
              Or Sign in with
            </p>
            <hr className="w-full xl:w-1/2 2xl:w-full border" />
          </div>

          <Button
            className="w-full mt-6 rounded-full py-3 px-5 border flex justify-center items-center hover:border-hover"
          // onClick={}
          >
            <img
              src={testImg}
              alt="google"
              className="object-fill w-[24px] h-[24px] mr-auto"
            />
            <p className="text-center mr-auto whitespace-nowrap inline-block text-base">
              Continue with Google
            </p>
          </Button>

          <Button
            className="w-full mt-4 rounded-full py-3 px-5 border flex justify-center items-center hover:border-hover"
          // onClick={}
          >
            <img
              src={testImg}
              alt="facebook"
              className="object-fill w-[24px] h-[24px] mr-auto"
            />
            <p className="text-center mr-auto whitespace-nowrap inline-block text-base">
              Continue with Facebook
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoAccount;
