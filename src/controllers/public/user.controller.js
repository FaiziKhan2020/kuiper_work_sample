import * as userService from "../../services/user.service";

export const me = (req, res) => {
  const { user } = req;
  try {
    const result = getMe(body, user);
    return res
      .status(result.statusCode)
      .json({ message: result.message, data: result.data });
  } catch (error) {
    console.error(error.toString());
    return res.status(500).json({
      message: "An error occured during the process! Please try later",
      data: null,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { params } = req;
    const user = await userService.getUserById(params);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
