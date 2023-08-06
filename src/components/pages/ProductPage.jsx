/* eslint-disable block-scoped-var */
import { Button, Card, Chip, Skeleton } from '@mui/joy';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import useFetchProduct from '../../hooks/useFetchProduct';
import PRODUCT_TYPES from '../../utils/productTypes';
import { CLEAN_ROUTES } from '../../utils/routes';

import OsBreadcrumbs from '../OsBreadcrumbs';
import UserInfo from '../UserInfo';

import locationIcon from '../../../public/images/location.svg';
import getVideoId from '../../utils/video';
import moneyBagIcon from '../../../public/images/money_bag.svg';
import knightIcon from '../../../public/images/knight.svg';
import clockIcon from '../../../public/images/clock.svg';
import technologyIcon from '../../../public/images/technology.svg';

function ProductPage() {
  var navigate = useNavigate();
  var { productId } = useParams();
  var { product, isPending } = useFetchProduct(productId);
  // isPending = true;
  if (product) {
    // eslint-disable-next-line vars-on-top
    var {
      name: productName,
      description,
      picture: productPicture,
      type: { name: productTypeName, id: productTypeId },
      company: {
        name: companyName,
        logo: companyLogo,
        address: companyAddress,
      },
      user: author,
      video,
      categories: productCategories,
      businessModels,
      trl,
      investmentEffort,
      investmentEffortText,
    } = product;
  }

  return (
    <div className="basis-4/5 flex flex-col justify-start items-start gap-4">
      <span className="flex justify-between items-center w-full basis-14">
        <Skeleton
          width="100%"
          height="50%"
          variant="rectangular"
          loading={isPending}
          className="rounded-lg"
          animation="wave"
        >
          <OsBreadcrumbs product={product} />
          <Button
            variant="solid"
            size="sm"
            className="bg-main-800"
            onClick={navigateEdit}
          >
            Edit
          </Button>
        </Skeleton>
      </span>
      <Card
        className="flex justify-start items-center w-full p-0"
        variant="outlined"
        orientation="horizontal"
      >
        <div className="flex flex-col justify-center items-center h-full basis-2/3 min-h-[30rem] border-r-2 border-slate-200 border-solid">
          <Skeleton
            width="90%"
            height="90%"
            variant="rectangular"
            loading={isPending}
            className="rounded-lg"
            animation="wave"
          >
            <div className="relative w-full">
              {!isPending && (
                <>
                  <img
                    src={productPicture}
                    alt="Product"
                    className="object-cover w-full h-72"
                  />
                  <Chip
                    className="bg-white text-slate-700 font-semibold text-base absolute top-0 left-0 rounded-none rounded-br-lg rounded-tl-lg h-10 pl-12 drop-shadow-md"
                    variant="solid"
                  >
                    {productTypeName}
                  </Chip>
                  <Chip
                    className="bg-main-800 absolute top-0 left-0 rounded-none rounded-br-lg rounded-tl-lg w-10 h-10 p-2"
                    variant="solid"
                  >
                    <img
                      src={PRODUCT_TYPES[productTypeId].icon}
                      alt="Product type icon"
                      className="object-contain"
                    />
                  </Chip>
                </>
              )}
            </div>
            <div className="w-full p-6">
              {!isPending && (
                <div className="flex flex-col justify-center items-start w-full h-full gap-2 text-slate-700">
                  <p className="text-lg font-bold">
                    {sanitizeHtml(productName)}
                  </p>
                  <p
                    className="text-sm leading-relaxed tracking-wider"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(description),
                    }}
                  />
                </div>
              )}
            </div>
          </Skeleton>
        </div>
        <div className="flex flex-col justify-center items-start h-full basis-1/3 gap-4">
          <Skeleton
            width="90%"
            height="90%"
            variant="rectangular"
            loading={isPending}
            className="rounded-lg"
            animation="wave"
          >
            {!isPending && (
              <>
                <p className="text-2xl text-slate-700 font-bold">Offered By</p>
                <img
                  src={companyLogo}
                  alt={`${companyName} Logo`}
                  className="h-10 object-contain"
                />
                <UserInfo
                  name={`${author.firstName} ${author.lastName}`}
                  company={companyName}
                  imageUrl={author.profilePicture}
                />
                <span className="flex justify-start items-start gap-1 mt-4">
                  <img
                    src={locationIcon}
                    alt="Location Icon"
                    className="iconSm"
                  />
                  <p className="whitespace-pre">
                    {`${companyAddress.street} ${companyAddress.house},
${companyAddress.zipCode} ${companyAddress.city.name}, ${companyAddress.country.name}`}
                  </p>
                </span>
              </>
            )}
          </Skeleton>
        </div>
      </Card>
      <Card
        className="flex flex-col justify-center items-center w-full gap-5 py-5"
        variant="outlined"
      >
        {!isPending && (
          <>
            <p className="font-bold text-base w-full text-left">Video</p>
            <iframe
              title="Product video"
              type="text/html"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${getVideoId(
                video,
              )}?autoplay=0`}
              frameBorder="0"
            />
          </>
        )}
      </Card>
      <Card
        className="flex flex-col justify-start items-start w-full py-5"
        variant="outlined"
      >
        {!isPending && (
          <>
            <p className="font-bold text-base w-full text-left">
              Offer details
            </p>
            <div className="flex justify-start items-start">
              <div className="flex flex-col justify-start items-start w-1/2">
                <div className="flex basis-full justify-start items-start gap-2">
                  <img
                    src={technologyIcon}
                    alt="technology icon"
                    className="iconSm"
                  />
                  <div className="flex flex-col justify-start items-start">
                    <p>Technology</p>
                    <div className="flex justify-start items-center gap-2">
                      {productCategories.map(function createChips(category) {
                        return (
                          <Chip
                            variant="soft"
                            className="bg-gray-200 text-gray-500"
                          >
                            {category.name}
                          </Chip>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex basis-full justify-start items-start gap-2">
                  <img
                    src={knightIcon}
                    alt="business models icon"
                    className="iconSm"
                  />
                  <div className="flex flex-col justify-start items-start">
                    <p>Business Models</p>
                    <div className="flex justify-start items-center gap-2">
                      {businessModels.map(function createChips(model) {
                        return (
                          <Chip
                            variant="soft"
                            className="bg-gray-200 text-gray-500"
                          >
                            {model.name}
                          </Chip>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start w-1/2">
                <div className="flex justify-start items-start w-full">
                  <img
                    src={clockIcon}
                    alt="TRL icon"
                    className="iconSm w-1/12"
                  />
                  <div className="flex flex-col justify-start items-start w-11/12">
                    <p>TRL</p>
                    <div className="flex justify-start items-center w-full">
                      <Chip
                        variant="soft"
                        className="bg-gray-200 text-gray-500 w-full"
                      >
                        {trl.name}
                      </Chip>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start w-full">
                  <img
                    src={moneyBagIcon}
                    alt="money bag icon"
                    className="iconSm w-1/12"
                  />
                  <div className="flex flex-col justify-start items-start w-11/12">
                    <p>Costs</p>
                    <div className="flex justify-start items-center w-full">
                      <Chip
                        variant="soft"
                        className="bg-gray-200 text-gray-500 w-full"
                      >
                        {`${
                          investmentEffortText
                            ? `${investmentEffortText}: `
                            : ''
                        }${investmentEffort}`}
                      </Chip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );

  function navigateEdit() {
    navigate(`${CLEAN_ROUTES.EDIT_PRODUCT}/${productId}`);
  }
}

export default ProductPage;
