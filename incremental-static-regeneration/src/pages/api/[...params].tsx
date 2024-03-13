import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { params } = req.query;

  res.status(200).json(params);
}

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  return {
    props: {
      params,
    },
  };
};
