'use client';

import React from 'react';
import Icon from '@ant-design/icons';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const BurguerSVG = () => (
  <svg
    fill='#000000'
    height='25px'
    width='25px'
    version='1.1'
    id='Capa_1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 330 330'
    xmlSpace='preserve'
  >
    <g>
      <g>
        <g>
          <g>
            <g>
              <path
                d='M79.947,122.693c-1.97,0-3.9-0.8-5.3-2.189c-1.4-1.4-2.2-3.33-2.2-5.311c0-1.97,0.8-3.899,2.2-5.3
         c1.4-1.4,3.33-2.2,5.3-2.2c1.97,0,3.91,0.8,5.3,2.2c1.4,1.4,2.2,3.33,2.2,5.3c0,1.98-0.8,3.91-2.2,5.311
         C83.857,121.893,81.917,122.693,79.947,122.693z'
              />
            </g>
            <g>
              <path
                d='M164.997,122.693c-1.969,0-3.899-0.8-5.299-2.189c-1.4-1.4-2.2-3.33-2.2-5.311c0-1.97,0.8-3.899,2.2-5.3
         c1.4-1.4,3.33-2.2,5.299-2.2c1.971,0,3.91,0.8,5.311,2.2c1.391,1.4,2.189,3.33,2.189,5.3c0,1.98-0.799,3.91-2.189,5.311
         C168.907,121.893,166.967,122.693,164.997,122.693z'
              />
            </g>
            <g>
              <path
                d='M250.047,122.693c-1.971,0-3.9-0.8-5.301-2.189c-1.399-1.4-2.199-3.33-2.199-5.311c0-1.97,0.8-3.899,2.199-5.3
         c1.4-1.4,3.33-2.2,5.301-2.2c1.98,0,3.91,0.8,5.3,2.2c1.399,1.4,2.2,3.33,2.2,5.3c0,1.98-0.801,3.91-2.2,5.311
         C253.958,121.893,252.028,122.693,250.047,122.693z'
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d='M124.697,84.893c-1.97,0-3.9-0.8-5.3-2.191c-1.4-1.399-2.2-3.329-2.2-5.309c0-1.97,0.8-3.91,2.2-5.3
         c1.39-1.4,3.33-2.2,5.3-2.2c1.98,0,3.91,0.8,5.3,2.2c1.4,1.39,2.2,3.33,2.2,5.3c0,1.98-0.8,3.91-2.2,5.309
         C128.607,84.093,126.677,84.893,124.697,84.893z'
              />
            </g>
            <g>
              <path
                d='M205.297,84.893c-1.971,0-3.9-0.8-5.301-2.191c-1.399-1.399-2.199-3.329-2.199-5.309c0-1.97,0.8-3.91,2.199-5.3
         c1.4-1.4,3.33-2.2,5.301-2.2c1.98,0,3.91,0.8,5.3,2.2c1.399,1.39,2.2,3.33,2.2,5.3c0,1.98-0.801,3.91-2.2,5.309
         C209.208,84.093,207.278,84.893,205.297,84.893z'
              />
            </g>
          </g>
        </g>
        <path
          d='M311.706,243.548c2.74-4.399,4.334-9.58,4.334-15.133c0-9.884-5.02-18.617-12.641-23.788
   c5.221-5.615,8.425-13.13,8.425-21.385c0-7.21-2.444-13.856-6.542-19.165C319.741,158.365,330,144.261,330,127.796
   c0-27.98-17.677-53.995-49.772-73.253c-30.896-18.538-71.819-28.747-115.227-28.747c-43.41,0-84.333,10.209-115.229,28.747
   C17.676,73.801,0,99.816,0,127.796c0,16.465,10.26,30.569,24.718,36.281c-4.098,5.309-6.542,11.955-6.542,19.165
   c0,8.255,3.208,15.767,8.429,21.382c-7.624,5.171-12.645,13.905-12.645,23.791c0,5.553,1.594,10.734,4.335,15.133
   C9.338,245.862,0,251.993,0,268.249c0,19.826,14.352,35.955,31.994,35.955h266.012c17.642,0,31.994-16.129,31.994-35.955
   C330,251.992,320.663,245.862,311.706,243.548z M33.176,183.242c0-9.067,7.378-16.444,16.446-16.444h230.756
   c9.067,0,16.445,7.377,16.445,16.444c0,1.711-0.265,3.361-0.751,4.913c-6.061-0.818-9.608-3.451-13.893-6.645
   c-5.909-4.404-13.264-9.887-27.021-9.887c-13.757,0-21.11,5.481-27.02,9.887c-5.182,3.862-9.275,6.913-18.056,6.913
   c-8.781,0-12.874-3.051-18.056-6.913c-5.91-4.405-13.264-9.887-27.021-9.887c-13.757,0-21.111,5.481-27.021,9.887
   c-5.182,3.862-9.274,6.913-18.056,6.913c-8.783,0-12.876-3.051-18.059-6.913c-5.91-4.405-13.265-9.887-27.023-9.887
   c-13.758,0-21.113,5.481-27.023,9.886c-4.285,3.194-7.834,5.828-13.898,6.645C33.44,186.604,33.176,184.953,33.176,183.242z
    M282.528,199.531c-0.705,0.093-1.42,0.157-2.149,0.157h-52.907c3.844-1.85,6.898-4.113,9.633-6.151
   c5.182-3.862,9.274-6.913,18.056-6.913c8.781,0,12.874,3.051,18.056,6.913C275.874,195.519,278.833,197.713,282.528,199.531z
    M192.696,199.689h-55.378c3.844-1.85,6.898-4.113,9.633-6.151c5.182-3.862,9.274-6.913,18.056-6.913
   c8.781,0,12.875,3.051,18.057,6.913C185.797,195.575,188.852,197.839,192.696,199.689z M102.541,199.689H49.623
   c-0.733,0-1.45-0.064-2.157-0.158c3.7-1.818,6.664-4.011,9.324-5.993c5.183-3.862,9.276-6.913,18.059-6.913
   s12.877,3.051,18.059,6.913C95.642,195.575,98.697,197.839,102.541,199.689z M42.689,214.689h244.622
   c7.57,0,13.729,6.157,13.729,13.727c0,7.57-6.158,13.729-13.729,13.729H42.689c-7.57,0-13.729-6.158-13.729-13.729
   C28.96,220.846,35.119,214.689,42.689,214.689z M15,127.796c0-22.504,15.09-43.951,42.489-60.391
   c28.599-17.159,66.78-26.609,107.511-26.609c40.729,0,78.91,9.45,107.51,26.609c27.4,16.439,42.49,37.887,42.49,60.391
   c0,13.234-10.767,24.002-24,24.002H39C25.766,151.798,15,141.031,15,127.796z M298.006,289.204H31.994
   c-9.371,0-16.994-9.4-16.994-20.955c0-6.708,1.183-11.105,16.994-11.105h266.012c15.811,0,16.994,4.397,16.994,11.105
   C315,279.804,307.376,289.204,298.006,289.204z'
        />
      </g>
    </g>
  </svg>
);
const PizzaSVG = () => (
  <svg
    fill='#000000'
    width='25px'
    height='25px'
    viewBox='0 0 50 50'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <path d='M20.90625 0C20.757813 0.0117188 20.613281 0.0351563 20.4375 0.09375C20.085938 0.210938 19.804688 0.464844 19.625 0.71875C19.445313 0.972656 19.335938 1.230469 19.21875 1.53125C18.835938 2.507813 17.878906 5.390625 17.40625 6.75C17.386719 6.800781 17.390625 6.855469 17.375 6.90625C17.363281 6.925781 17.351563 6.949219 17.34375 6.96875L13.53125 16.21875L13.46875 16.3125C13.441406 16.371094 13.421875 16.4375 13.40625 16.5L5.09375 36.53125C5.082031 36.5625 5.070313 36.59375 5.0625 36.625L0.0625 48.625C-0.0976563 49 -0.015625 49.4375 0.273438 49.726563C0.5625 50.015625 1 50.097656 1.375 49.9375L42.71875 32.84375C42.75 32.835938 42.78125 32.824219 42.8125 32.8125C43.796875 32.496094 47.25 31.304688 48.15625 31C48.738281 30.804688 49.34375 30.507813 49.71875 29.875C50.09375 29.242188 50.0625 28.417969 49.75 27.6875C48.625 25.042969 45.8125 16.691406 39.59375 10.46875C33.566406 4.441406 25.753906 1.203125 22.125 0.21875C21.722656 0.109375 21.355469 -0.03125 20.90625 0 Z M 21.21875 2C21.199219 2.023438 21.214844 2.046875 21.625 2.15625C24.863281 3.03125 32.523438 6.210938 38.1875 11.875C43.984375 17.675781 46.667969 25.558594 47.90625 28.46875C48.070313 28.855469 47.996094 28.847656 48 28.84375C48.003906 28.839844 47.890625 28.972656 47.53125 29.09375C46.574219 29.414063 43.09375 30.625 42.21875 30.90625C42.199219 30.914063 42.175781 30.925781 42.15625 30.9375C42.160156 30.9375 42.164063 30.910156 42.09375 30.71875C41.152344 28.175781 38.511719 22.011719 33.28125 16.78125C28.222656 11.722656 22.28125 9.082031 19.59375 8.0625C19.34375 7.96875 19.21875 7.898438 19.15625 7.875C19.160156 7.851563 19.207031 7.761719 19.21875 7.71875C19.265625 7.621094 19.296875 7.515625 19.3125 7.40625C19.800781 6.003906 20.800781 3.027344 21.09375 2.28125C21.15625 2.121094 21.183594 2.0625 21.21875 2 Z M 18.375 9.75C18.546875 9.820313 18.722656 9.878906 18.875 9.9375C21.402344 10.894531 27.128906 13.441406 31.875 18.1875C36.78125 23.09375 39.335938 29.054688 40.21875 31.4375C40.246094 31.507813 40.28125 31.585938 40.3125 31.65625L25.65625 37.71875C25.859375 37.179688 26 36.609375 26 36C26 33.25 23.75 31 21 31C18.25 31 16 33.25 16 36C16 37.996094 17.203125 39.699219 18.90625 40.5L2.875 47.125L6 39.59375C6.734375 40.441406 7.800781 41 9 41C11.195313 41 13 39.199219 13 37C13 34.800781 11.195313 33 9 33C8.90625 33 8.8125 33.023438 8.71875 33.03125L12.21875 24.59375C13.316406 26.046875 15.046875 27 17 27C20.300781 27 23 24.304688 23 21C23 17.695313 20.300781 15 17 15C16.726563 15 16.453125 15.027344 16.1875 15.0625 Z M 17 17C19.222656 17 21 18.777344 21 21C21 23.222656 19.222656 25 17 25C15.199219 25 13.699219 23.835938 13.1875 22.21875L15.1875 17.4375C15.730469 17.160156 16.347656 17 17 17 Z M 31 21C28.804688 21 27 22.800781 27 25C27 25.324219 27.019531 25.636719 27.09375 25.9375C25.835938 26.847656 25 28.335938 25 30C25 32.75 27.25 35 30 35C32.75 35 35 32.75 35 30C35 29.03125 34.703125 28.144531 34.21875 27.375C34.710938 26.703125 35 25.886719 35 25C35 22.800781 33.195313 21 31 21 Z M 31 23C32.117188 23 33 23.882813 33 25C33 25.308594 32.9375 25.617188 32.8125 25.875C32.007813 25.320313 31.046875 25 30 25C29.65625 25 29.324219 25.027344 29 25.09375C29 25.0625 29 25.03125 29 25C29 23.882813 29.882813 23 31 23 Z M 30 27C30.808594 27 31.523438 27.332031 32.0625 27.84375C32.136719 27.957031 32.230469 28.050781 32.34375 28.125C32.753906 28.636719 33 29.285156 33 30C33 31.667969 31.667969 33 30 33C28.332031 33 27 31.667969 27 30C27 28.882813 27.601563 27.921875 28.5 27.40625C28.699219 27.378906 28.882813 27.289063 29.03125 27.15625C29.335938 27.054688 29.660156 27 30 27 Z M 21 33C22.667969 33 24 34.332031 24 36C24 37.667969 22.667969 39 21 39C19.332031 39 18 37.667969 18 36C18 34.332031 19.332031 33 21 33 Z M 9 35C10.117188 35 11 35.882813 11 37C11 38.117188 10.117188 39 9 39C7.9375 39 7.078125 38.195313 7 37.15625L7.6875 35.5C8.039063 35.191406 8.492188 35 9 35Z' />
  </svg>
);
const DrinkSVG = () => (
  <svg
    fill='#000000'
    version='1.1'
    id='Capa_1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='25px'
    height='25px'
    viewBox='0 0 484.072 484.072'
    xmlSpace='preserve'
  >
    <g>
      <g>
        <path
          d='M399.407,93.002c-0.914-0.244-1.879-0.422-2.966-0.417c-45.082,0.038-90.159,0.556-135.242,1.115V13.029
   c0-0.505-0.086-0.952-0.137-1.424c-0.183-6.063-5.383-12.688-13.284-11.456c-19.398,3.032-38.085,9.666-54.243,20.957
   c-11.125,7.771-0.538,26.174,10.709,18.318c11.04-7.71,23.014-12.814,35.749-16.074v70.589
   c-50.384,0.63-100.762,1.255-151.151,1.295c-5.906,0.005-9.247,3.961-10.055,8.455c-0.629,0.604-1.229,1.28-1.762,2.1
   c-5.469,8.483-9.714,18.979-6.347,29.084c3.59,10.763,14.233,16.047,24.623,18.319c1.666,0.363,3.219,0.363,4.626,0.078
   c0.488,0.107,1.021,0.16,1.544,0.214c10.704,83.992,23.729,225.978,39.456,309.18c0.833,4.408,3.605,6.724,6.851,7.414
   c0.929,0.559,1.955,1.036,3.209,1.32c64.312,14.655,130.474,17.412,195.238,3.981c5.403-1.117,7.657-5.119,7.602-9.309
   c0.817-1.381,1.376-2.99,1.513-4.899c5.82-84.701,23.537-226.156,35.42-310.087c0.096-0.676,0.102-1.315,0.086-1.95
   c3.188-0.307,6.383-0.541,9.572-0.868c6.027-0.622,9.358-5.22,10.008-9.979c5.643-13.342,6.14-27.891-2.173-40.454
   C405.967,94.381,402.671,92.982,399.407,93.002z M334.561,456.083c-57.777,10.999-116.794,8.298-174.129-4.311
   c-4.57-24.37-8.882-107.115-12.99-131.551c30.239,9.38,58.844,6.094,89.509-6.586c37.095-15.335,70.025-36.521,111.686-31.585
   C342.68,320.45,337.435,417.282,334.561,456.083z M351.902,261.404c-0.599-0.178-1.198-0.351-1.868-0.438
   c-73.545-9.719-133.038,66.984-205.46,35.922c-0.35-0.152-0.701-0.219-1.051-0.335c-1.935-11.913-3.823-23.831-5.662-35.759
   c65.673,49.789,140.604-48.792,214.662-28.046c1.427,0.401,2.747,0.475,3.98,0.357
   C354.954,242.534,353.42,251.973,351.902,261.404z M359.814,212.937c-0.528-0.234-1.052-0.472-1.656-0.645
   c-37.516-10.509-72.396,3.298-106.287,18.943c-40.923,18.896-81.42,39.853-115.757-1.632c-1.041-1.251-2.168-2.12-3.332-2.704
   c-3.519-24.168-6.896-48.358-9.988-72.589c82.258,2.892,164.613,3.412,246.667-3.225
   C366.476,171.734,363.175,192.34,359.814,212.937z M391.942,127.822c-96.364,9.39-193.191,8.361-289.846,4.537
   c-0.762-0.03-1.473,0.033-2.148,0.127c-2.57-0.589-5.038-1.254-7.363-2.544c-1.666-0.929-0.579-0.279-1.808-1.538
   c0.69,0.713,0.122-0.516-0.056-0.691c-0.345-2.496,2.255-7.551,4.621-11.217c0.016-0.03,0.025-0.056,0.041-0.089
   c99.051-0.175,198.081-2.447,297.138-2.595C394.04,118.352,393.745,123.074,391.942,127.822z'
        />
      </g>
    </g>
  </svg>
);

const BurguerIcon = (props: any) => <Icon {...props} component={BurguerSVG} />;
const PizzaIcon = (props: any) => <Icon {...props} component={PizzaSVG} />;
const DrinkIcon = (props: any) => <Icon {...props} component={DrinkSVG} />;

const categories = [
  {
    id: 1,
    label: 'Burger',
    icon: <BurguerIcon />,
  },
  {
    id: 2,
    label: 'Pizza',
    icon: <PizzaIcon />,
  },
  {
    id: 3,
    label: 'Drinks',
    icon: <DrinkIcon />,
  },
];

interface CatProps {
  label: string;
  icon: React.JSX.Element;
}

const Category = ({ icon, label }: CatProps) => {
  return (
    <Button startContent={icon} className='w-32 bg-white shadow-md '>
      {label}
    </Button>
  );
};

interface Product {
  id: number;
  name: string;
  price: number;
  weight: number;
  image?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Super Burguer',
    price: 150.0,
    weight: 240,
  },
  {
    id: 2,
    name: 'Super Burguer',
    price: 150.0,
    weight: 240,
  },
  {
    id: 3,
    name: 'Super Burguer',
    price: 150.0,
    weight: 240,
  },
  {
    id: 4,
    name: 'Super Burguer',
    price: 150.0,
    weight: 240,
  },
];

const Product = ({ product }: { product: Product }) => {
  return (
    <Card className='py-4 w-[220px] flex'>
      <CardBody className='py-2 justify-center'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl mx-auto'
          src='/products/burguer.png'
          width={100}
          height={100}
        />
      </CardBody>
      <CardFooter>
        <div className='flex flex-col mx-auto'>
          <h4 className='text-center font-bold text-lg mb-2'>
            {product.name} <br />
          </h4>
          <p className='text-center text-sm'>{product.weight}g</p>
          <p className='font-bold text-center text-lg text-primary'>
            ${product.price}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

function Menu() {
  return (
    <section className='max-w-5xl mx-auto px-5 py-12'>
      <div className='flex flex-col'>
        <div className='flex'>
          <h6 className='text-primary text-sm text-center mx-auto'>Our Menu</h6>
        </div>
        <div className='flex mt-6'>
          <h2 className='text-black text-3xl font-bold max-w-sm text-center mx-auto leading-snug'>
            Menu That Always Make You Fall In Love
          </h2>
        </div>
        <div className='flex justify-center gap-4 p-2 mt-2'>
          {categories.map((cat) => (
            <Category key={cat.id} icon={cat.icon} label={cat.label} />
          ))}
        </div>
        <div className='p-8 flex-col'>
          <div className='flex justify-center gap-4'>
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className='mx-auto'>
          <Button
            as={Link}
            href='/Menu'
            color='primary'
            className='text-primary rounded-full'
            variant='ghost'
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
