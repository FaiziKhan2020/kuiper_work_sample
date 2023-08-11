import * as onboardingService from "../../services/onboarding.service";

export const getUserOnboarding = async (req, res) => {
  try {
    const { user } = req;
    const result = await onboardingService.getUserOnboarding(user.companyId);
    return res
      .status(result.statusCode)
      .json({ message: result.message, data: result.data });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const updateOrganization = async (req, res) => {
  try {
    const { body, user, files } = req;
    const result = await onboardingService.updateOrganization(
      user.companyId,
      body,
      files[0] || null
    );
    return res
      .status(result.statusCode)
      .json({ message: result.message, data: result.data });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};
