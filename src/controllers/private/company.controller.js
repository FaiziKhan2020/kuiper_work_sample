import * as companyService from "../../services/company.service";

export const updateCompany = async (req, res) => {
  try {
    const { body } = req;
    const company = await companyService.updateCompany(body);
    return res.status(200).json({
      success: true,
      data: company,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json();
  }
};
