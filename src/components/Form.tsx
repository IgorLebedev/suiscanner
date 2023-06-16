import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import cn from "classnames";
import { SuiNetworkContext } from '../providers/SuiNetworkProvider';

const Form = () => {
  const { provider } = useContext(SuiNetworkContext);
  useEffect(() => {
    const run = async () => {
      try {
        const res = await (provider as any).requestSuiFromFaucet(
          '0xe6e494d014eb41edacae84bfc5893ab5616be246064d52b452ba88828a548b8b',
        );
        return res;
      } catch (e) {
        throw e;
      }
    }
    const result = run();
    console.log(result);
  }, [provider]);
  const formik = useFormik({
    initialValues: {
      wallet: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className="w-full max-w-md" onSubmit={formik.handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            id="wallet"
            value={formik.values.wallet}
            placeholder="Wallet"
            aria-label="Full name"
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex justify-end py-2">
        <button
          className={cn("flex-shrink-0", "text-sm", "text-white", "py-1", "px-4", "rounded", {
            "bg-gray-600": formik.values.wallet === '', 
            "hover:bg-teal-700": formik.values.wallet !== '',
            "bg-teal-500": formik.values.wallet !== '',
          })}
          type="submit"
          disabled={formik.values.wallet === ''}
        >
          Get
        </button>
        <button
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
          onClick={() => formik.resetForm()}
        >
          Clear
        </button>
        </div>
      </form>
  );
};

export default Form;